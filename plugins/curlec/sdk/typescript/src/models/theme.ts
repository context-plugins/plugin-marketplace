import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Theme = {
  /** Hide the checkout top bar to prevent method switching. */
  hideTopbar?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const themeSchema: Schema<Theme> = s.object<Theme>(
  {
    hideTopbar: s.optional(s.boolean()),
    _keysMap: {
      hideTopbar: "hide_topbar",
    },
  },
  { additionalProperties: s.json() },
);
