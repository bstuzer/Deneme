const BASEURL = '/api';

async function getAllCpu() {
  // call: GET /api/courses
  const response = await fetch(BASEURL + '/allCpu');
  const cpuJson = await response.json();
  if (response.ok) {
    return cpuJson
  } else {
    throw cpuJson;  // an object with the error coming from the server
  }
}

async function getAllGpu() {
    // call: GET /api/courses
    const response = await fetch(BASEURL + '/allGpu');
    const gpuJson = await response.json();
    if (response.ok) {
      return gpuJson
    } else {
      throw gpuJson;  // an object with the error coming from the server
    }
  }

  async function getAllHdd() {
    // call: GET /api/courses
    const response = await fetch(BASEURL + '/allHdd');
    const hddJson = await response.json();
    if (response.ok) {
      return hddJson
    } else {
      throw hddJson;  // an object with the error coming from the server
    }
  }

  async function getAllMb() {
    // call: GET /api/courses
    const response = await fetch(BASEURL + '/allMb');
    const mbJson = await response.json();
    if (response.ok) {
      return mbJson
    } else {
      throw mbJson;  // an object with the error coming from the server
    }
  }

  async function getAllRam() {
    // call: GET /api/courses
    const response = await fetch(BASEURL + '/allRam');
    const ramJson = await response.json();
    if (response.ok) {
      return ramJson
    } else {
      throw ramJson;  // an object with the error coming from the server
    }
  }

  async function getAllGames() {
    // call: GET /api/courses
    const response = await fetch(BASEURL + '/allGames');
    const gamesJson = await response.json();
    if (response.ok) {
      return gamesJson
    } else {
      throw gamesJson;  // an object with the error coming from the server
    }
  }
  
const API = {getAllCpu, getAllGpu, getAllHdd, getAllMb, getAllRam,getAllGames};

export default API;