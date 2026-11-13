import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceTypeSchema, type ResourceType } from "./resource-type.js";

export type Meta = {
  resourceType?: ResourceType;
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaSchema: Schema<Meta> = s.object<Meta>(
  {
    resourceType: s.optional(s.lazy(() => resourceTypeSchema)),
    location: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
