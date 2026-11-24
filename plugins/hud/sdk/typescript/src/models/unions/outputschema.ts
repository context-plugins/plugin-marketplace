import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Outputschema = Record<string, unknown>;

export const outputschemaSchema: Schema<Outputschema> = s.of<Outputschema>(
  s.union([s.record(s.string(), s.unknown())]),
);
