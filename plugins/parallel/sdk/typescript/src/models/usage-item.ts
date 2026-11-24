import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Usage item for a single operation. */
export type UsageItem = {
  /** Name of the SKU. */
  name: string;
  /** Count of the SKU. */
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageItemSchema: Schema<UsageItem> = s.object<UsageItem>(
  {
    name: s.string(),
    count: s.int(),
  },
  { additionalProperties: s.json() },
);
