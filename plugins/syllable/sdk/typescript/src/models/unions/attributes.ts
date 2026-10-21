import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Arbitrary additional metadata for the event */
export type Attributes = Record<string, unknown>;

export const attributesSchema: Schema<Attributes> = s.of<Attributes>(
  s.union([s.record(s.string(), s.unknown())]),
);
