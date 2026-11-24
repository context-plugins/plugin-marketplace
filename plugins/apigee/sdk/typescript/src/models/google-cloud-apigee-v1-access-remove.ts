import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Remove action. For example, "Remove" : { "name" : "target.name", "success" : true } */
export type GoogleCloudApigeeV1AccessRemove = {
  name?: string;
  success?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AccessRemoveSchema: Schema<GoogleCloudApigeeV1AccessRemove> =
  s.object<GoogleCloudApigeeV1AccessRemove>(
    {
      name: s.optional(s.string()),
      success: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
