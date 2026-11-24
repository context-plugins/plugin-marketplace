import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { marginSchema, type Margin } from "./margin.js";

export type MarginData = {
  /** Response data for instrument margin details */
  margins?: Margin[];
  /** Total margin required to execute the orders */
  requiredMargin?: number;
  /** Total margin after margin benefit */
  finalMargin?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marginDataSchema: Schema<MarginData> = s.object<MarginData>(
  {
    margins: s.optional(s.array(s.lazy(() => marginSchema))),
    requiredMargin: s.optional(s.float64()),
    finalMargin: s.optional(s.float64()),
    _keysMap: {
      requiredMargin: "required_margin",
      finalMargin: "final_margin",
    },
  },
  { additionalProperties: s.json() },
);
