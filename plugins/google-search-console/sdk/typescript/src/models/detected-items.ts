import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

/** Rich Results items grouped by type. */
export type DetectedItems = {
  /** Rich Results type */
  richResultType?: string;
  /** List of Rich Results items. */
  items?: Item[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectedItemsSchema: Schema<DetectedItems> = s.object<DetectedItems>(
  {
    richResultType: s.optional(s.string()),
    items: s.optional(s.array(s.lazy(() => itemSchema))),
  },
  { additionalProperties: s.json() },
);
