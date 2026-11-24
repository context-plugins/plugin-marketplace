import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResourceClass = {
  /** The unique identifier of the resource class */
  id?: string;
  /** The resource class name in namespace/name format */
  resourceClass?: string;
  /** A description of the resource class */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceClassSchema: Schema<ResourceClass> = s.object<ResourceClass>(
  {
    id: s.optional(s.string()),
    resourceClass: s.optional(s.string()),
    description: s.optional(s.string()),
    _keysMap: {
      resourceClass: "resource_class",
    },
  },
  { additionalProperties: s.json() },
);
