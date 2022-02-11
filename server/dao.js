'use strict';
/* Data Access Object (DAO) module for accessing courses and exams */

const sqlite = require('sqlite3');

// open the database
const db = new sqlite.Database('db.sqlite', (err) => {
  if (err) throw err;
});

// get all cpu
exports.listCPU = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM Cpu';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const result = rows.map((e) => ({ id: e.id, brand: e.brand, model: e.model, rating: e.rating, freq: e.freq, socket: e.socket, price: e.price, link: e.link  }));
      resolve(result);
    });
  });
};

// get all gpu
exports.listGPU = () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Gpu';
      db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const result = rows.map((e) => ({ id: e.id, brand: e.brand, model: e.model, rating: e.rating, mem: e.mem, freq: e.freq, price: e.price, link: e.link  }));
        resolve(result);
      });
    });
  };

  // get all hdd
exports.listHdd = () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Hdd';
      db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const result = rows.map((e) => ({ id: e.id, brand: e.brand, model: e.model, size: e.size, rating: e.rating, price: e.price, link: e.link  }));
        resolve(result);
      });
    });
  };

    // get all mb
exports.listMb = () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Mb';
      db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const result = rows.map((e) => ({ id: e.id, brand: e.brand, model: e.model, socket: e.socket, ram: e.ram, price: e.price, link: e.link  }));
        resolve(result);
      });
    });
  };

  // get all ram
exports.listRam = () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Ram';
      db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const result = rows.map((e) => ({ id: e.id, brand: e.brand, model: e.model, rating: e.rating, type: e.type, size: e.size, mem: e.mem, freq: e.freq, price: e.price, link: e.link  }));
        resolve(result);
      });
    });
  };

    // get all games
exports.listGames = () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Games';
      db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const result = rows.map((e) => ({ id: e.id, name: e.name, cpu: e.cpu, gpu: e.gpu, ram: e.ram, hdd: e.hdd  }));
        resolve(result);
      });
    });
  };