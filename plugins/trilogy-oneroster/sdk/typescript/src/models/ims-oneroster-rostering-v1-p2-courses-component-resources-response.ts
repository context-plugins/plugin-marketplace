import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourcedIdPairsSchema, type SourcedIdPairs } from "./sourced-id-pairs.js";

export type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse = {
  sourcedIdPairs: SourcedIdPairs;
};

export const imsOnerosterRosteringV1P2CoursesComponentResourcesResponseSchema: Schema<ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse> =
  s.object<ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse>({
    sourcedIdPairs: sourcedIdPairsSchema,
  });
