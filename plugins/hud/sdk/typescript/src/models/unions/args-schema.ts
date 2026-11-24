import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ArgsSchema = Record<string, unknown>;

export const argsSchemaSchema: Schema<ArgsSchema> = s.of<ArgsSchema>(
  s.union([s.record(s.string(), s.unknown())]),
);
