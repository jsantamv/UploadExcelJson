using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class ServiceStation
    {
        //OrderDate Region  Rep Item    Units Unit Cost Total
        public DateTime OrderDate { get; set; }
        public string Region { get; set; }
        public string Rep { get; set; }
        public string Item { get; set; }
        public string Units { get; set; }
        public decimal UnitCost { get; set; }
        public decimal Total { get; set; }
    }
}