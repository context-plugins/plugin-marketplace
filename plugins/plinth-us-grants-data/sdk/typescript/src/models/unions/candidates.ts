import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** On `ambiguous`: the organizations the name matched, each with ein, name and state. */
export type Candidates = Record<string, unknown>[];

export const candidatesSchema: Schema<Candidates> = s.of<Candidates>(
  s.union([s.array(s.record(s.string(), s.unknown()))]),
);
