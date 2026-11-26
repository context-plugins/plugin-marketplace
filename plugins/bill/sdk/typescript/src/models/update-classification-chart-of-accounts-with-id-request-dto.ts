import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { account2Schema, type Account2 } from "./account2.js";

/** Update ClassificationChartOfAccounts with id request Dto. */
export type UpdateClassificationChartOfAccountsWithIdRequestDto = {
  /** BILL-generated ID of the chart of accounts. The value begins with `0ca`. */
  id: string;
  /** Chart of accounts name */
  name?: string;
  /** Chart of accounts description */
  description?: string;
  /**
   * BILL-generated ID of the parent chart of accounts. You can set this field if this chart of
   * accounts is a child object.
   */
  parentId?: string;
  account?: Account2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateClassificationChartOfAccountsWithIdRequestDtoSchema: Schema<UpdateClassificationChartOfAccountsWithIdRequestDto> =
  s.object<UpdateClassificationChartOfAccountsWithIdRequestDto>(
    {
      id: s.string(),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      parentId: s.optional(s.string()),
      account: s.optional(s.lazy(() => account2Schema)),
    },
    { additionalProperties: s.json() },
  );
