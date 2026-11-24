import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of this metric. */
export const Type1 = {
  MetricTypeUnspecified: "METRIC_TYPE_UNSPECIFIED",
  TypeInteger: "TYPE_INTEGER",
  TypeFloat: "TYPE_FLOAT",
  TypeSeconds: "TYPE_SECONDS",
  TypeMilliseconds: "TYPE_MILLISECONDS",
  TypeMinutes: "TYPE_MINUTES",
  TypeHours: "TYPE_HOURS",
  TypeStandard: "TYPE_STANDARD",
  TypeCurrency: "TYPE_CURRENCY",
  TypeFeet: "TYPE_FEET",
  TypeMiles: "TYPE_MILES",
  TypeMeters: "TYPE_METERS",
  TypeKilometers: "TYPE_KILOMETERS",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
