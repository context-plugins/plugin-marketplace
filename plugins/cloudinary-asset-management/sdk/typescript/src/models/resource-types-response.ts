import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceType3Schema, type ResourceType3 } from "./resource-type3.js";

export type ResourceTypesResponse = {
  /** The list of available resource types. */
  resourceTypes?: ResourceType3[];
};

export const resourceTypesResponseSchema: Schema<ResourceTypesResponse> = s.object<ResourceTypesResponse>({
  resourceTypes: s.optional(s.array(s.lazy(() => resourceType3Schema))),
  _keysMap: {
    resourceTypes: "resource_types",
  },
});
