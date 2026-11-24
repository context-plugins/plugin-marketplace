import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The theme currently active for the authenticated user. */
export type ActiveTheme = {
  /**
   * Identifier of the active theme. The reserved sentinel `"default"` is returned when the user is
   * using the built-in default (no custom or preset theme stored).
   *
   * @default "default"
   */
  themeId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activeThemeSchema: Schema<ActiveTheme> = s.object<ActiveTheme>(
  {
    themeId: s.defaulted(s.string(), "default"),
  },
  { additionalProperties: s.json() },
);
