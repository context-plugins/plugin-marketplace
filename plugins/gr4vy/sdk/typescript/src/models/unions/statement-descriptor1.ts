import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Value to explain charges or payments on bank statements. */
export type StatementDescriptor1 = string;

export const statementDescriptor1Schema: Schema<StatementDescriptor1> = s.of<StatementDescriptor1>(
  s.union([s.string()]),
);
