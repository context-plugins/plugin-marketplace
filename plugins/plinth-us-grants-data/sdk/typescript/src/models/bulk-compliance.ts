import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BulkCompliance = {
  /** Up to 100 EINs. Any format — normalized per EIN. */
  eins: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkComplianceSchema: Schema<BulkCompliance> = s.object<BulkCompliance>(
  {
    eins: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
