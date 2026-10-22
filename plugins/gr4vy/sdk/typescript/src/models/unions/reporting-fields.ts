import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fieldSchema, type Field } from "../field.js";

/**
 * The non-secret reporting fields that have been configured for this payment service. Any secret
 * fields are omitted.
 */
export type ReportingFields = Field[];

export const reportingFieldsSchema: Schema<ReportingFields> = s.of<ReportingFields>(
  s.union([s.array(s.lazy(() => fieldSchema))]),
);
