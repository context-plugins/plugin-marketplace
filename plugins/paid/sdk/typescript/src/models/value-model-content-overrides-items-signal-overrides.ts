import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentOverridesItemsSignalOverridesDefaultsSchema,
  type ValueModelContentOverridesItemsSignalOverridesDefaults,
} from "./unions/value-model-content-overrides-items-signal-overrides-defaults.js";

export type ValueModelContentOverridesItemsSignalOverrides = {
  defaults?: Record<string, ValueModelContentOverridesItemsSignalOverridesDefaults>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentOverridesItemsSignalOverridesSchema: Schema<ValueModelContentOverridesItemsSignalOverrides> =
  s.object<ValueModelContentOverridesItemsSignalOverrides>(
    {
      defaults: s.optional(
        s.record(
          s.string(),
          s.lazy(() => valueModelContentOverridesItemsSignalOverridesDefaultsSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
