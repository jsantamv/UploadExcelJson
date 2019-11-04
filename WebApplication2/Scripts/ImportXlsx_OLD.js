const app = new Vue({
    el: '#ImportModal2',
    data: {
        objetoXlsx: []
    },
    methods: {
        importXlsx(e) {
            console.log(e)
            /* set up XMLHttpRequest */
            let url = "SampleData.xlsx";
            let oReq = new XMLHttpRequest();
            oReq.open("GET", url, true);
            oReq.responseType = "arraybuffer";

            oReq.onload = function (e) {
                let arraybuffer = oReq.response;

                /* convert data to binary string */
                let data = new Uint8Array(arraybuffer);
                let arr = new Array();
                for (let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                let bstr = arr.join("");

                /* Call XLSX */
                let workbook = XLSX.read(bstr, { type: "binary" });

                /* DO SOMETHING WITH workbook HERE */
                let first_sheet_name = workbook.SheetNames[0];
                /* Get worksheet */
                let worksheet = workbook.Sheets[first_sheet_name];
                let result = XLSX.utils.sheet_to_json(worksheet, { raw: true })

                console.log(result)

                this.sendData(result)
            }
        },
        sendData: function (results) {
            $.post("ServiceStations/AddOrEditServiceStations2",
                {
                    data: results
                }, function (result) {
                    console.log(result)
                })
        },
        _change(evt) {
            const files = evt.target.files;
            if (files && files[0]) this._file(files[0]);
        },
        _file(file) {
            /* Boilerplate to set up FileReader */
            const reader = new FileReader();
            reader.onload = (e) => {
                /* Parse data */
                const bstr = e.target.result;
                const wb = XLSX.read(bstr, { type: 'binary' });
                /* Get first worksheet */
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                /* Convert array of arrays */
                const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
                /* Update state */
                //this.data = data;
                //this.cols = make_cols(ws['!ref']);
            };
            reader.readAsBinaryString(file);
        }
    }
})

