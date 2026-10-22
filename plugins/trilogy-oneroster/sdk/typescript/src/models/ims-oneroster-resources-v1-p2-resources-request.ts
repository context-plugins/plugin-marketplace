import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resource7Schema, type Resource7 } from "./resource7.js";

export type ImsOnerosterResourcesV1P2ResourcesRequest = {
  resource: Resource7;
};

export const imsOnerosterResourcesV1P2ResourcesRequestSchema: Schema<ImsOnerosterResourcesV1P2ResourcesRequest> =
  s.object<ImsOnerosterResourcesV1P2ResourcesRequest>({
    resource: resource7Schema,
  });
