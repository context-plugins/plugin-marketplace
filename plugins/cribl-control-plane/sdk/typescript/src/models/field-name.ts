import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Name of the metadata field. */
export const FieldName = {
  Service: "service",
  Hostname: "hostname",
  Timestamp: "timestamp",
  AuditId: "auditId",
} as const;
export type FieldName = (typeof FieldName)[keyof typeof FieldName] | (string & {});

export const fieldNameSchema: EnumSchema<FieldName> = s.enumOf<FieldName>(FieldName);
