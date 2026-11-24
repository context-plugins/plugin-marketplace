import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorsSchema, type Colors } from "./colors.js";
import { poweredByAlignmentSchema, type PoweredByAlignment } from "./powered-by-alignment.js";

export type Settings = {
  /** Project ID */
  project?: string;
  /** Whether opt-in is enabled for this project */
  enabled?: boolean;
  /** Title for the opt-in UI */
  title?: string;
  /** Description for the opt-in UI */
  description?: string;
  /** Image URL for the opt-in UI */
  imageUrl?: string;
  colors?: Colors;
  /** Alignment for "powered by" text */
  poweredByAlignment?: PoweredByAlignment;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const settingsSchema: Schema<Settings> = s.object<Settings>(
  {
    project: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
    title: s.optional(s.string()),
    description: s.optional(s.string()),
    imageUrl: s.optional(s.string()),
    colors: s.optional(s.lazy(() => colorsSchema)),
    poweredByAlignment: s.optional(s.lazy(() => poweredByAlignmentSchema)),
    _keysMap: {
      project: "_project",
      imageUrl: "imageURL",
    },
  },
  { additionalProperties: s.json() },
);
