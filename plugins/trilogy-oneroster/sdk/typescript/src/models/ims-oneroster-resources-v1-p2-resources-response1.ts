import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourcedIdPairsSchema, type SourcedIdPairs } from "./sourced-id-pairs.js";

export type ImsOnerosterResourcesV1P2ResourcesResponse1 = {
  sourcedIdPairs: SourcedIdPairs;
};

export const imsOnerosterResourcesV1P2ResourcesResponse1Schema: Schema<ImsOnerosterResourcesV1P2ResourcesResponse1> =
  s.object<ImsOnerosterResourcesV1P2ResourcesResponse1>({
    sourcedIdPairs: sourcedIdPairsSchema,
  });
