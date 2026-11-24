import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResourceClassCreation = {
  /** The unique identifier of the resource class */
  id?: string;
  /** The resource class name in namespace/name format */
  resourceClass?: string;
  /** A description of the resource class */
  description?: string;
  /**
   * The resource class token. This is only displayed once and cannot be retrieved again. Store it
   * securely.
   */
  token?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceClassCreationSchema: Schema<ResourceClassCreation> = s.object<ResourceClassCreation>(
  {
    id: s.optional(s.string()),
    resourceClass: s.optional(s.string()),
    description: s.optional(s.string()),
    token: s.optional(s.string()),
    _keysMap: {
      resourceClass: "resource_class",
    },
  },
  { additionalProperties: s.json() },
);
