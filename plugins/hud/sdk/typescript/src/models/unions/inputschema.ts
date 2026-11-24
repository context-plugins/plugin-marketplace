import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Inputschema = Record<string, unknown>;

export const inputschemaSchema: Schema<Inputschema> = s.of<Inputschema>(
  s.union([s.record(s.string(), s.unknown())]),
);
