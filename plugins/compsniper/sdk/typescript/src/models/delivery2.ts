import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";

export type Delivery2 = {
  mode?: Mode;
  status?: string;
  downloadUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const delivery2Schema: Schema<Delivery2> = s.object<Delivery2>(
  {
    mode: s.optional(s.lazy(() => modeSchema)),
    status: s.optional(s.string()),
    downloadUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
