import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Record2 = {
  recordId?: string;
  recordName?: string | null;
  startBlock?: number;
  complete?: boolean;
  truncatedBy?: string | null;
  givenUpBlock?: number | null;
  nextStartBlock?: number | null;
};

export const record2Schema: Schema<Record2> = s.object<Record2>({
  recordId: s.optional(s.string()),
  recordName: s.optionalNullable(s.string()),
  startBlock: s.optional(s.int()),
  complete: s.optional(s.boolean()),
  truncatedBy: s.optionalNullable(s.string()),
  givenUpBlock: s.optionalNullable(s.int()),
  nextStartBlock: s.optionalNullable(s.int()),
});
