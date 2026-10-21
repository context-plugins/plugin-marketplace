import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourcedIdPairsSchema, type SourcedIdPairs } from "./sourced-id-pairs.js";

export type ImsOnerosterRosteringV1P2DemographicsResponse1 = {
  sourcedIdPairs: SourcedIdPairs;
};

export const imsOnerosterRosteringV1P2DemographicsResponse1Schema: Schema<ImsOnerosterRosteringV1P2DemographicsResponse1> =
  s.object<ImsOnerosterRosteringV1P2DemographicsResponse1>({
    sourcedIdPairs: sourcedIdPairsSchema,
  });
