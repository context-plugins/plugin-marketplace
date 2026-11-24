import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" : "default"
 * }
 */
export type GoogleCloudApigeeV1AccessSet = {
  name?: string;
  value?: string;
  success?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AccessSetSchema: Schema<GoogleCloudApigeeV1AccessSet> =
  s.object<GoogleCloudApigeeV1AccessSet>(
    {
      name: s.optional(s.string()),
      value: s.optional(s.string()),
      success: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
