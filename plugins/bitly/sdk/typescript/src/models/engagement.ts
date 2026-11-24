import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Engagement = {
  libButtonClicks?: number;
  clicks?: number;
  scans?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const engagementSchema: Schema<Engagement> = s.object<Engagement>(
  {
    libButtonClicks: s.optional(s.int()),
    clicks: s.optional(s.int()),
    scans: s.optional(s.int()),
    _keysMap: {
      libButtonClicks: "lib_button_clicks",
    },
  },
  { additionalProperties: s.json() },
);
