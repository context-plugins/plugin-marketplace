import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DialogCodeHookSettings = {
  /** Enables the dialog code hook so that it processes user requests. */
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dialogCodeHookSettingsSchema: Schema<DialogCodeHookSettings> = s.object<DialogCodeHookSettings>(
  {
    enabled: s.boolean(),
  },
  { additionalProperties: s.json() },
);
