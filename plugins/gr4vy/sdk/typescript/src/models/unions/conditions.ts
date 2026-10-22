import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The conditions under which these fields are required */
export type Conditions = Record<string, unknown>;

export const conditionsSchema: Schema<Conditions> = s.of<Conditions>(
  s.union([s.record(s.string(), s.unknown())]),
);
