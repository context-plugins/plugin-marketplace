import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourcedIdPairsSchema, type SourcedIdPairs } from "./sourced-id-pairs.js";

export type ImsOnerosterRosteringV1P2CoursesComponentsResponse = {
  sourcedIdPairs: SourcedIdPairs;
};

export const imsOnerosterRosteringV1P2CoursesComponentsResponseSchema: Schema<ImsOnerosterRosteringV1P2CoursesComponentsResponse> =
  s.object<ImsOnerosterRosteringV1P2CoursesComponentsResponse>({
    sourcedIdPairs: sourcedIdPairsSchema,
  });
