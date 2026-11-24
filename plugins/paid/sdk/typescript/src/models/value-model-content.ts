import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentFormulasItemsSchema,
  type ValueModelContentFormulasItems,
} from "./value-model-content-formulas-items.js";
import {
  valueModelContentOverridesItemsSchema,
  type ValueModelContentOverridesItems,
} from "./value-model-content-overrides-items.js";
import {
  valueModelContentSegmentTablesItemsSchema,
  type ValueModelContentSegmentTablesItems,
} from "./value-model-content-segment-tables-items.js";
import {
  valueModelContentSignalsItemsSchema,
  type ValueModelContentSignalsItems,
} from "./value-model-content-signals-items.js";
import {
  valueModelContentValueTypesItemsSchema,
  type ValueModelContentValueTypesItems,
} from "./value-model-content-value-types-items.js";

/** Full value model configuration: value types, formulas, signals, and overrides. */
export type ValueModelContent = {
  currency: string;
  valueTypes: ValueModelContentValueTypesItems[];
  formulas: ValueModelContentFormulasItems[];
  signals: ValueModelContentSignalsItems[];
  segmentTables?: ValueModelContentSegmentTablesItems[];
  overrides?: ValueModelContentOverridesItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentSchema: Schema<ValueModelContent> = s.object<ValueModelContent>(
  {
    currency: s.string(),
    valueTypes: s.array(s.lazy(() => valueModelContentValueTypesItemsSchema)),
    formulas: s.array(s.lazy(() => valueModelContentFormulasItemsSchema)),
    signals: s.array(s.lazy(() => valueModelContentSignalsItemsSchema)),
    segmentTables: s.optional(s.array(s.lazy(() => valueModelContentSegmentTablesItemsSchema))),
    overrides: s.optional(s.array(s.lazy(() => valueModelContentOverridesItemsSchema))),
  },
  { additionalProperties: s.json() },
);
