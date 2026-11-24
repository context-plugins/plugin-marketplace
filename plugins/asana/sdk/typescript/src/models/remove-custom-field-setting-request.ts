import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RemoveCustomFieldSettingRequest = {
  /** The custom field to remove from this portfolio. */
  customField: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const removeCustomFieldSettingRequestSchema: Schema<RemoveCustomFieldSettingRequest> =
  s.object<RemoveCustomFieldSettingRequest>(
    {
      customField: s.string(),
      _keysMap: {
        customField: "custom_field",
      },
    },
    { additionalProperties: s.json() },
  );
