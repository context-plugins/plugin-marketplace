import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { verbositySchema, type Verbosity } from "../verbosity.js";

export type Verbosity1 = Verbosity;

export const verbosity1Schema: Schema<Verbosity1> = s.of<Verbosity1>(
  s.union([s.lazy(() => verbositySchema)]),
);
