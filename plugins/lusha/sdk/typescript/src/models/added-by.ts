import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { surfaceSchema, type Surface } from "./surface.js";

/** Where and by whom a row was added to the table. */
export type AddedBy = {
  surface?: Surface;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addedBySchema: Schema<AddedBy> = s.object<AddedBy>(
  {
    surface: s.optional(s.lazy(() => surfaceSchema)),
  },
  { additionalProperties: s.json() },
);
