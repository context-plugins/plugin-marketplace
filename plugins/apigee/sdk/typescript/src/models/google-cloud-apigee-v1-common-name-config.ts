import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1CommonNameConfig = {
  name?: string;
  matchWildCards?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1CommonNameConfigSchema: Schema<GoogleCloudApigeeV1CommonNameConfig> =
  s.object<GoogleCloudApigeeV1CommonNameConfig>(
    {
      name: s.optional(s.string()),
      matchWildCards: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
