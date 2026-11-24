import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { placeSchema, type Place } from "./place.js";
import { winSchema, type Win } from "./win.js";

export type Lay1 = {
  win: Win[];
  place: Place[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lay1Schema: Schema<Lay1> = s.object<Lay1>(
  {
    win: s.array(s.lazy(() => winSchema)),
    place: s.array(s.lazy(() => placeSchema)),
  },
  { additionalProperties: s.json() },
);
