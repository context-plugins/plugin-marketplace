import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TimestampRep = {
  milliseconds?: number;
  seconds?: number;
  rfc3339?: string;
  simple?: string;
};

export const timestampRepSchema: Schema<TimestampRep> = s.object<TimestampRep>({
  milliseconds: s.optional(s.int()),
  seconds: s.optional(s.int()),
  rfc3339: s.optional(s.string()),
  simple: s.optional(s.string()),
});
