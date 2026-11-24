import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** ConfigValueOption represents an option for a config variable of type enum or multi select. */
export type GoogleCloudApihubV1ConfigValueOption = {
  /** Required. Display name of the option. */
  displayName?: string;
  /** Required. Id of the option. */
  id?: string;
  /** Optional. Description of the option. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ConfigValueOptionSchema: Schema<GoogleCloudApihubV1ConfigValueOption> =
  s.object<GoogleCloudApihubV1ConfigValueOption>(
    {
      displayName: s.optional(s.string()),
      id: s.optional(s.string()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
