import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contractTemplatePriceBookRuleSchema,
  type ContractTemplatePriceBookRule,
} from "./contract-template-price-book-rule.js";

export type ContractTemplatePriceBook = {
  name?: string;
  managementAccounts?: string[];
  rules?: ContractTemplatePriceBookRule[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contractTemplatePriceBookSchema: Schema<ContractTemplatePriceBook> =
  s.object<ContractTemplatePriceBook>(
    {
      name: s.optional(s.string()),
      managementAccounts: s.optional(s.array(s.string())),
      rules: s.optional(s.array(s.lazy(() => contractTemplatePriceBookRuleSchema))),
    },
    { additionalProperties: s.json() },
  );
