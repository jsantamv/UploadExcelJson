using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class UploadExcelController : Controller
    {
        // GET: UploadExcel
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult UploadExcel(IEnumerable<Models.ServiceStation> model)
        {
            try
            {
                return Json(new
                {
                    result = model,
                    Respuesta = "Se ejecuto correctamente"
                }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new
                {
                    result = ex,
                    Respuesta = "Erronea"
                }, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult UploadExcel2(string data)
        {
            try
            {
                return Json(new
                {
                    result = data,
                    Respuesta = "Se ejecuto correctamente"
                }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new
                {
                    result = ex,
                    Respuesta = "Erronea"
                }, JsonRequestBehavior.AllowGet);
            }
        }


    }
}