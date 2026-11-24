import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Errors = unknown;

export const errorsSchema: Schema<Errors> = s.of<Errors>(
  s.union([s.record(s.string(), s.unknown()), s.unknown()]),
);
