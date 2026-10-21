import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourcedIdPairsSchema, type SourcedIdPairs } from "./sourced-id-pairs.js";

export type ImsOnerosterRosteringV1P2CoursesResponse1 = {
  sourcedIdPairs: SourcedIdPairs;
};

export const imsOnerosterRosteringV1P2CoursesResponse1Schema: Schema<ImsOnerosterRosteringV1P2CoursesResponse1> =
  s.object<ImsOnerosterRosteringV1P2CoursesResponse1>({
    sourcedIdPairs: sourcedIdPairsSchema,
  });
