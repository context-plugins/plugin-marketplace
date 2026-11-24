import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { irregularSchema, type Irregular } from "./irregular.js";
import {
  linksAffordabilityIncomeApiSchema,
  type LinksAffordabilityIncomeApi,
} from "./links-affordability-income-api.js";
import { otherCreditSchema, type OtherCredit } from "./other-credit.js";
import { regularSchema, type Regular } from "./regular.js";
import { summarySchema, type Summary } from "./summary.js";

/**
 * Container object, containing income details.
 *
 * The Income Summary object with income summarised and classified by type: regular, irregular or
 * other sources (created/refreshed across up to 10 institutions)
 */
export type IncomeResponse = {
  /** Always "income". */
  type: string;
  /** The identifier of the income resource to be retrieved. */
  id: string;
  /** Number of days covered by the summary */
  coverageDays?: number;
  /**
   * Start month for the period for which the Income summary is generated. The period of time
   * relates to the account and transaction data used as input into the summary.
   */
  fromMonth: string;
  /**
   * End month (usually the current month) for the period for which the Income summary is generated.
   */
  toMonth: string;
  /** Required true */
  regular?: Regular[];
  /** Required true */
  irregular?: Irregular[];
  /** Required true */
  otherCredit?: OtherCredit[];
  /** Summary totals relating to income analysis */
  summary: Summary;
  links?: LinksAffordabilityIncomeApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incomeResponseSchema: Schema<IncomeResponse> = s.object<IncomeResponse>(
  {
    type: s.string(),
    id: s.string(),
    coverageDays: s.optional(s.int()),
    fromMonth: s.string(),
    toMonth: s.string(),
    regular: s.optional(s.array(s.lazy(() => regularSchema))),
    irregular: s.optional(s.array(s.lazy(() => irregularSchema))),
    otherCredit: s.optional(s.array(s.lazy(() => otherCreditSchema))),
    summary: summarySchema,
    links: s.optional(s.lazy(() => linksAffordabilityIncomeApiSchema)),
  },
  { additionalProperties: s.json() },
);
