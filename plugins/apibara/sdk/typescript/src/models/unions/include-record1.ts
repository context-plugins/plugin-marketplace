import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { includeRecordSchema, type IncludeRecord } from "../include-record.js";

export type IncludeRecord1 = boolean | IncludeRecord;

export const includeRecord1Schema: Schema<IncludeRecord1> = s.of<IncludeRecord1>(
  s.union([s.boolean(), s.lazy(() => includeRecordSchema)]),
);
