import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { voidableFieldSchema, type VoidableField } from "../voidable-field.js";

/**
 * The non-secret reporting fields that have been configured for this payment service. Any secret
 * fields are omitted.
 */
export type ReportingFields2 = VoidableField[];

export const reportingFields2Schema: Schema<ReportingFields2> = s.of<ReportingFields2>(
  s.union([s.array(s.lazy(() => voidableFieldSchema))]),
);
