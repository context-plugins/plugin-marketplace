import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { category1Schema, type Category1 } from "./category1.js";

export type IpoInvestorType = {
  /** Investor category the issue accepts. Pass this value as category when applying */
  category?: Category1;
  /** Human-readable name of the category; null when the IPO service does not provide one */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoInvestorTypeSchema: Schema<IpoInvestorType> = s.object<IpoInvestorType>(
  {
    category: s.optional(s.lazy(() => category1Schema)),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
