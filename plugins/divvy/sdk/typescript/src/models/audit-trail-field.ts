import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

/** Field whose change was captured in Audit Trail Entry. */
export type AuditTrailField = {
  /** Field name */
  name?: string;
  value?: Value;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditTrailFieldSchema: Schema<AuditTrailField> = s.object<AuditTrailField>(
  {
    name: s.optional(s.string()),
    value: s.optional(s.lazy(() => valueSchema)),
  },
  { additionalProperties: s.json() },
);
