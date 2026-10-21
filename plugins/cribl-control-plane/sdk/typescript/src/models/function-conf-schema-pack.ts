import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaPack = {
  /** List of fields to keep, everything else will be packed */
  unpackedFields?: string[];
  /** Name of the (packed) target field */
  target?: string;
};

export const functionConfSchemaPackSchema: Schema<FunctionConfSchemaPack> = s.object<FunctionConfSchemaPack>({
  unpackedFields: s.optional(s.array(s.string())),
  target: s.optional(s.string()),
});
