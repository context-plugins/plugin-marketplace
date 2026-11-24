import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tiktok2 = {
  id?: string | null;
  shareId?: string | null;
  requestId?: string | null;
  permalink?: string | null;
  status?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tiktok2Schema: Schema<Tiktok2> = s.object<Tiktok2>(
  {
    id: s.optionalNullable(s.string()),
    shareId: s.optionalNullable(s.string()),
    requestId: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
    status: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
