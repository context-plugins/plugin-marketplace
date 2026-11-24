import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Response enum of allowed keys for bill policy approval. */
export const RuleKeyResponse = {
  BillAmount: "BILL_AMOUNT",
  BillLineItemAmount: "BILL_LINE_ITEM_AMOUNT",
  AccountingClassId: "ACCOUNTING_CLASS_ID",
  ChartOfAccountId: "CHART_OF_ACCOUNT_ID",
  CustomerId: "CUSTOMER_ID",
  DepartmentId: "DEPARTMENT_ID",
  EmployeeId: "EMPLOYEE_ID",
  JobId: "JOB_ID",
  LocationId: "LOCATION_ID",
  VendorId: "VENDOR_ID",
  Undefined: "UNDEFINED",
} as const;
export type RuleKeyResponse = (typeof RuleKeyResponse)[keyof typeof RuleKeyResponse] | (string & {});

export const ruleKeyResponseSchema: EnumSchema<RuleKeyResponse> = s.enumOf<RuleKeyResponse>(RuleKeyResponse);
