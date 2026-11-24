import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The metric's data type. */
export const Type2 = {
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
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
