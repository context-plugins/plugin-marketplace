import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentOverridesItemsAdditionalSignalsItemsDefaultsSchema,
  type ValueModelContentOverridesItemsAdditionalSignalsItemsDefaults,
} from "./unions/value-model-content-overrides-items-additional-signals-items-defaults.js";

export type ValueModelContentOverridesItemsAdditionalSignalsItems = {
  eventName: string;
  label: string;
  formulaId?: string;
  variableMapping?: Record<string, string>;
  defaults?: Record<string, ValueModelContentOverridesItemsAdditionalSignalsItemsDefaults>;
  segmentTableIds?: string[];
  description?: string;
  labels?: string[];
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentOverridesItemsAdditionalSignalsItemsSchema: Schema<ValueModelContentOverridesItemsAdditionalSignalsItems> =
  s.object<ValueModelContentOverridesItemsAdditionalSignalsItems>(
    {
      eventName: s.string(),
      label: s.string(),
      formulaId: s.optional(s.string()),
      variableMapping: s.optional(s.record(s.string(), s.string())),
      defaults: s.optional(
        s.record(
          s.string(),
          s.lazy(() => valueModelContentOverridesItemsAdditionalSignalsItemsDefaultsSchema),
        ),
      ),
      segmentTableIds: s.optional(s.array(s.string())),
      description: s.optional(s.string()),
      labels: s.optional(s.array(s.string())),
      tags: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
