import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Area = {
  /** Opaque token. Order with it in the same session. */
  areaId?: string;
  areaName?: string;
  areaCode?: string;
  stock?: number;
  orderable?: boolean;
  /** Your monthly price per number in this area, at your contract rates. */
  estMonthlyUsd?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const areaSchema: Schema<Area> = s.object<Area>(
  {
    areaId: s.optional(s.string()),
    areaName: s.optional(s.string()),
    areaCode: s.optional(s.string()),
    stock: s.optional(s.int()),
    orderable: s.optional(s.boolean()),
    estMonthlyUsd: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
