import httpCommon from "./http-common";



const AppService = {
  getAll: () => httpCommon.get("/list"),
  get: (id) =>  httpCommon.get(`/detail/${id}`),
  create: (data) => httpCommon.post("/list", data)
}

export default AppService;

export const createData = (param) => async () => {
  try {
    const res = await AppService.create(param);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getData = () => async () => {
  try {
    const res = await AppService.getAll();
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};


