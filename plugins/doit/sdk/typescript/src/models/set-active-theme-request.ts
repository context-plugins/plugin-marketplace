import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for setting the active custom or preset theme for the authenticated user. */
export type SetActiveThemeRequest = {
  /**
   * Identifier of the theme to activate. Send the reserved sentinel `"default"` to clear the active
   * theme and fall back to the built-in default.
   *
   * @default "default"
   */
  themeId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const setActiveThemeRequestSchema: Schema<SetActiveThemeRequest> = s.object<SetActiveThemeRequest>(
  {
    themeId: s.defaulted(s.string(), "default"),
  },
  { additionalProperties: s.json() },
);
