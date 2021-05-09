using HajosTeszt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        [HttpGet]
        [Route("kerdesek/count")]
        public int M1()
        {
            hajostesztContext context = new hajostesztContext();
            int kérdésekSzáma = context.Questions.Count();
            return kérdésekSzáma;
        }

        [HttpGet]
        [Route("kerdesek/{sorszám}")]
        public ActionResult M2(int sorszám)
        {
            hajostesztContext context = new hajostesztContext();
            var kérdés = (from x in context.Questions
                          where x.QuestionId == sorszám
                          select x).FirstOrDefault();

            if (kérdés == null) BadRequest("nincs ilyen kérdés");
            return new JsonResult(kérdés);
        }

    }
}
