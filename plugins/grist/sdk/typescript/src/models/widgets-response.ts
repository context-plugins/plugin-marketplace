import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WidgetsResponse = {
  /** Widget display name */
  name?: string;
  /** URL to load the widget */
  url?: string;
  /** Unique widget identifier */
  widgetId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const widgetsResponseSchema: Schema<WidgetsResponse> = s.object<WidgetsResponse>(
  {
    name: s.optional(s.string()),
    url: s.optional(s.string()),
    widgetId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
