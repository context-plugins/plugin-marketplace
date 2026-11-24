import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Associated order line information */
export type UsageSummaryOrderLine = {
  id?: string;
  displayId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSummaryOrderLineSchema: Schema<UsageSummaryOrderLine> = s.object<UsageSummaryOrderLine>(
  {
    id: s.optional(s.string()),
    displayId: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
