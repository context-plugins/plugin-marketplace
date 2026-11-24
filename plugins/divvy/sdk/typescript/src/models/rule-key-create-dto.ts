import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Keys for approval rules. */
export const RuleKeyCreateDto = {
  BillAmount: "BILL_AMOUNT",
  BillLineItemAmount: "BILL_LINE_ITEM_AMOUNT",
  ChartOfAccountId: "CHART_OF_ACCOUNT_ID",
  VendorId: "VENDOR_ID",
} as const;
export type RuleKeyCreateDto = (typeof RuleKeyCreateDto)[keyof typeof RuleKeyCreateDto] | (string & {});

export const ruleKeyCreateDtoSchema: EnumSchema<RuleKeyCreateDto> =
  s.enumOf<RuleKeyCreateDto>(RuleKeyCreateDto);
