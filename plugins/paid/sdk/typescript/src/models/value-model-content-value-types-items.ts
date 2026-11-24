import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentValueTypesItemsMonetaryConversionSchema,
  type ValueModelContentValueTypesItemsMonetaryConversion,
} from "./value-model-content-value-types-items-monetary-conversion.js";

export type ValueModelContentValueTypesItems = {
  slug: string;
  name: string;
  unit: Record<string, unknown>;
  monetaryConversion?: ValueModelContentValueTypesItemsMonetaryConversion;
  description?: string | null;
  displayOrder?: number | null;
  color?: string | null;
  icon?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentValueTypesItemsSchema: Schema<ValueModelContentValueTypesItems> =
  s.object<ValueModelContentValueTypesItems>(
    {
      slug: s.string(),
      name: s.string(),
      unit: s.record(s.string(), s.unknown()),
      monetaryConversion: s.optional(s.lazy(() => valueModelContentValueTypesItemsMonetaryConversionSchema)),
      description: s.optionalNullable(s.string()),
      displayOrder: s.optionalNullable(s.int()),
      color: s.optionalNullable(s.string()),
      icon: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
