import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceSchema, type Resource } from "./resource.js";

export type ImsOnerosterResourcesV1P2ResourcesResponse2 = {
  /** Represents a digital resource of some kind. */
  resource: Resource;
};

export const imsOnerosterResourcesV1P2ResourcesResponse2Schema: Schema<ImsOnerosterResourcesV1P2ResourcesResponse2> =
  s.object<ImsOnerosterResourcesV1P2ResourcesResponse2>({
    resource: resourceSchema,
  });
