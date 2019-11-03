using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace mvcPrueba.Controllers
{
    public class UpLoadExcelController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}