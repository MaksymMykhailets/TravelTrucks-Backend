import { fetchCampers, fetchCamperById } from '../services/campersService.js';

export const getCampersController = async (req, res, next) => {
  try {
    const filters = req.query;
    const campers = await fetchCampers(filters);
    res.json({
      status: 200,
      message: 'Successfully fetched campers',
      data: campers,
    });
  } catch (error) {
    next(error);
  }
};

export const getCamperByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const camper = await fetchCamperById(id);
    if (!camper) {
      res.status(404).json({
        status: 404,
        message: 'Camper not found',
      });
      return;
    }
    res.json({
      status: 200,
      message: `Successfully found camper with id ${id}`,
      data: camper,
    });
  } catch (error) {
    next(error);
  }
};
