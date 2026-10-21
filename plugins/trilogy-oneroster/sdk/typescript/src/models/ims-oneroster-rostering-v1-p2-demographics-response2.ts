import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { demographicsSchema, type Demographics } from "./demographics.js";

export type ImsOnerosterRosteringV1P2DemographicsResponse2 = {
  /** Represents a student's demographics information. */
  demographics: Demographics;
};

export const imsOnerosterRosteringV1P2DemographicsResponse2Schema: Schema<ImsOnerosterRosteringV1P2DemographicsResponse2> =
  s.object<ImsOnerosterRosteringV1P2DemographicsResponse2>({
    demographics: demographicsSchema,
  });
