import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceType2Schema, type ResourceType2 } from "./resource-type2.js";

export type Meta2 = {
  resourceType?: ResourceType2;
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meta2Schema: Schema<Meta2> = s.object<Meta2>(
  {
    resourceType: s.optional(s.lazy(() => resourceType2Schema)),
    location: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
