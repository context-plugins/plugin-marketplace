import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { widgetItemSchema, type WidgetItem } from "./widget-item.js";

/** Complete catalogue of widgets supported for the selected customer. */
export type WidgetList = {
  /** Supported widgets. Use an item's stable `alias` or customer-specific `id` with getWidget. */
  items: WidgetItem[];
  /** Number of entries in `items`. */
  rowCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const widgetListProperties: s.Shape<WidgetList> = {
  items: s.array(s.lazy(() => widgetItemSchema)),
  rowCount: s.int(),
};

export const widgetListInternalSchema: Schema<WidgetList> = s.object<WidgetList>(widgetListProperties, {
  additionalProperties: s.json(),
});

export const widgetListSchema: Schema<WidgetList> = s.lazySchema(() =>
  s.object<WidgetList>(
    {
      ...widgetListProperties,
      rowCount: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
