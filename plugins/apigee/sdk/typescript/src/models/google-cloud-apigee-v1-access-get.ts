import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Get action. For example, "Get" : { "name" : "target.name", "value" : "default" } */
export type GoogleCloudApigeeV1AccessGet = {
  value?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AccessGetSchema: Schema<GoogleCloudApigeeV1AccessGet> =
  s.object<GoogleCloudApigeeV1AccessGet>(
    {
      value: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
