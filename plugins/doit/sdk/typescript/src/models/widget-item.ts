import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeDoiTWidgetsBetaApiSchema, type TypeDoiTWidgetsBetaApi } from "./type-doi-twidgets-beta-api.js";

/** Catalogue entry for one widget, without its computed result. */
export type WidgetItem = {
  /**
   * Customer- and tier-specific widget id. This value is accepted by getWidget and can vary between
   * customers.
   */
  id: string;
  /** Stable customer-facing widget identifier. This value is also accepted by getWidget. */
  alias: string;
  /** Human-readable widget name. */
  name: string;
  /** What the widget value represents. */
  description: string;
  /** Whether the widget is supplied by DoiT or defined by a customer. */
  type: TypeDoiTWidgetsBetaApi;
  /** Determines which property is populated in the widget's `result`. @default "monetary_metric" */
  kind?: "monetary_metric";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const widgetItemSchema: Schema<WidgetItem> = s.object<WidgetItem>(
  {
    id: s.string(),
    alias: s.string(),
    name: s.string(),
    description: s.string(),
    type: typeDoiTWidgetsBetaApiSchema,
    kind: s.defaulted(s.literal("monetary_metric"), "monetary_metric"),
  },
  { additionalProperties: s.json() },
);
