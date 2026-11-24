import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentOverridesItemsAdditionalSignalsItemsSchema,
  type ValueModelContentOverridesItemsAdditionalSignalsItems,
} from "./value-model-content-overrides-items-additional-signals-items.js";
import {
  valueModelContentOverridesItemsMonetaryConversionOverridesSchema,
  type ValueModelContentOverridesItemsMonetaryConversionOverrides,
} from "./value-model-content-overrides-items-monetary-conversion-overrides.js";
import {
  valueModelContentOverridesItemsScopeSchema,
  type ValueModelContentOverridesItemsScope,
} from "./value-model-content-overrides-items-scope.js";
import {
  valueModelContentOverridesItemsSignalOverridesSchema,
  type ValueModelContentOverridesItemsSignalOverrides,
} from "./value-model-content-overrides-items-signal-overrides.js";

export type ValueModelContentOverridesItems = {
  id: string;
  label: string;
  scope: ValueModelContentOverridesItemsScope;
  currency?: string;
  signalOverrides?: Record<string, ValueModelContentOverridesItemsSignalOverrides>;
  additionalSignals?: ValueModelContentOverridesItemsAdditionalSignalsItems[];
  monetaryConversionOverrides?: Record<string, ValueModelContentOverridesItemsMonetaryConversionOverrides>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentOverridesItemsSchema: Schema<ValueModelContentOverridesItems> =
  s.object<ValueModelContentOverridesItems>(
    {
      id: s.string(),
      label: s.string(),
      scope: valueModelContentOverridesItemsScopeSchema,
      currency: s.optional(s.string()),
      signalOverrides: s.optional(
        s.record(
          s.string(),
          s.lazy(() => valueModelContentOverridesItemsSignalOverridesSchema),
        ),
      ),
      additionalSignals: s.optional(
        s.array(s.lazy(() => valueModelContentOverridesItemsAdditionalSignalsItemsSchema)),
      ),
      monetaryConversionOverrides: s.optional(
        s.record(
          s.string(),
          s.lazy(() => valueModelContentOverridesItemsMonetaryConversionOverridesSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
