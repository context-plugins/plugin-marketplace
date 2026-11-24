import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentSignalsItemsDefaultsSchema,
  type ValueModelContentSignalsItemsDefaults,
} from "./unions/value-model-content-signals-items-defaults.js";

export type ValueModelContentSignalsItems = {
  eventName: string;
  label: string;
  formulaId?: string;
  variableMapping?: Record<string, string>;
  defaults?: Record<string, ValueModelContentSignalsItemsDefaults>;
  segmentTableIds?: string[];
  description?: string;
  labels?: string[];
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentSignalsItemsSchema: Schema<ValueModelContentSignalsItems> =
  s.object<ValueModelContentSignalsItems>(
    {
      eventName: s.string(),
      label: s.string(),
      formulaId: s.optional(s.string()),
      variableMapping: s.optional(s.record(s.string(), s.string())),
      defaults: s.optional(
        s.record(
          s.string(),
          s.lazy(() => valueModelContentSignalsItemsDefaultsSchema),
        ),
      ),
      segmentTableIds: s.optional(s.array(s.string())),
      description: s.optional(s.string()),
      labels: s.optional(s.array(s.string())),
      tags: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
