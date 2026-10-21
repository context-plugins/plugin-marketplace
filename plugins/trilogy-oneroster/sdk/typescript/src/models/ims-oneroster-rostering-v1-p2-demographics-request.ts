import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { demographics2Schema, type Demographics2 } from "./demographics2.js";

export type ImsOnerosterRosteringV1P2DemographicsRequest = {
  demographics: Demographics2;
};

export const imsOnerosterRosteringV1P2DemographicsRequestSchema: Schema<ImsOnerosterRosteringV1P2DemographicsRequest> =
  s.object<ImsOnerosterRosteringV1P2DemographicsRequest>({
    demographics: demographics2Schema,
  });
