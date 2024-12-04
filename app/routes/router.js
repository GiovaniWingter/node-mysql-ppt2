var express = require("express");
var router = express.Router();

var pool = require("../../config/pool_conexoes");

router.get("/", function (req, res) {
  res.render("pages/index")
});

router.get("/select", async function (req, res) {
  try {
    const [results] = await pool.query("select * from tarefas");
    console.log(results);
    return res.json({ linhas: results });
  } catch (e) {
    return res.json({ erro: e });

  }
});

router.get("/insert", async function (req, res) {
  dadosParaIserir = {
    "nome_tarefa": "Formatar PC do Cliente 3",
    "prazo_tarefa": "2022-06-25",
    "situacao_tarefa": 1
  }
  try {
    const [results] = await pool.query("insert into tarefas set ? ", [dadosParaIserir]);
    console.log(results);
    return res.json({ linhas: results });
                        // {
                        //   "linhas": {
                        //       "fieldCount": 0,
                        //       "affectedRows": 1,
                        //       "insertId": 5,
                        //       "info": "",
                        //       "serverStatus": 2,
                        //       "warningStatus": 0,
                        //       "changedRows": 0
                        //   }
                        // }
  } catch (e) {
    return res.json({ erro: e });
  }
});

router.get("/update", async function (req, res) {
  dadosParaAlterar = {
    "nome_tarefa": "Formatar PC do Cliente 3.1",
    "prazo_tarefa": "2023-12-25",
    "situacao_tarefa": 0,
  }
  id_tarefa = 5;
  try {
    const [results] = await pool.query("UPDATE tarefas SET ? WHERE id_tarefa = ? ",
        [dadosParaAlterar, id_tarefa]);
    console.log(results);
    return res.json({ linhas: results });
                        // {
                        //     "linhas": {
                        //         "fieldCount": 0,
                        //         "affectedRows": 1,
                        //         "insertId": 0,
                        //         "info": "Rows matched: 1  Changed: 1  Warnings: 0",
                        //         "serverStatus": 2,
                        //         "warningStatus": 0,
                        //         "changedRows": 1
                        //     }
                        // }
  } catch (e) {
    return res.json({ erro: e });
  }

});

router.get("/delete-f", async function (req, res) {
  id_tarefa = 6;
  try {
    const [results] = await pool.query("delete from tarefas  WHERE id_tarefa = ? ",
        [id_tarefa]);
    console.log(results);
    return res.json({ linhas: results });
                        // {
                        //     "linhas": {
                        //         "fieldCount": 0,
                        //         "affectedRows": 0,
                        //         "insertId": 0,
                        //         "info": "",
                        //         "serverStatus": 2,
                        //         "warningStatus": 0,
                        //         "changedRows": 0
                        //     }
                        // }
  } catch (e) {
    return res.json({ erro: e });
  }

});

router.get("/delete-l", async function (req, res) {
  id_tarefa = 5;
  try {
    const [results] = await pool.query("UPDATE tarefas SET status_tarefa = 0 WHERE id_tarefa = ? ",
        [id_tarefa]);
    console.log(results);
    return res.json({ linhas: results });
                        // {
                        //     "linhas": {
                        //         "fieldCount": 0,
                        //         "affectedRows": 1,
                        //         "insertId": 0,
                        //         "info": "Rows matched: 1  Changed: 1  Warnings: 0",
                        //         "serverStatus": 2,
                        //         "warningStatus": 0,
                        //         "changedRows": 1
                        //     }
                        // }
  } catch (e) {
    return res.json({ erro: e });
  }

});

module.exports = router;