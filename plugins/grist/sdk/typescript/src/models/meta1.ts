import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceType1Schema, type ResourceType1 } from "./resource-type1.js";

export type Meta1 = {
  resourceType?: ResourceType1;
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meta1Schema: Schema<Meta1> = s.object<Meta1>(
  {
    resourceType: s.optional(s.lazy(() => resourceType1Schema)),
    location: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
