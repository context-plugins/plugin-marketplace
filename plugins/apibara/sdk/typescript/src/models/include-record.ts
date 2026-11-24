import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeRecord = {
  Created: "created",
  All: "all",
} as const;
export type IncludeRecord = (typeof IncludeRecord)[keyof typeof IncludeRecord] | (string & {});

export const includeRecordSchema: EnumSchema<IncludeRecord> = s.enumOf<IncludeRecord>(IncludeRecord);
