import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Common name to validate the target server against. */
export type GoogleCloudApigeeV1CommonNameConfig2 = {
  name?: string;
  matchWildCards?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1CommonNameConfig2Schema: Schema<GoogleCloudApigeeV1CommonNameConfig2> =
  s.object<GoogleCloudApigeeV1CommonNameConfig2>(
    {
      name: s.optional(s.string()),
      matchWildCards: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
