import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";

/** ClassificationChartOfAccounts response Dto. */
export type ClassificationChartOfAccountsResponseDto = {
  /** BILL-generated ID of the chart of accounts. The value begins with `0ca`. */
  id?: string;
  /** Set as `true` if the chart of accounts is archived */
  archived?: boolean;
  /** Chart of accounts name */
  name?: string;
  /** Chart of accounts description */
  description?: string;
  /**
   * BILL-generated ID of the parent chart of accounts. You can set this field if this chart of
   * accounts is a child object.
   */
  parentId?: string;
  account?: Account;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationChartOfAccountsResponseDtoSchema: Schema<ClassificationChartOfAccountsResponseDto> =
  s.object<ClassificationChartOfAccountsResponseDto>(
    {
      id: s.optional(s.string()),
      archived: s.optional(s.boolean()),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      parentId: s.optional(s.string()),
      account: s.optional(s.lazy(() => accountSchema)),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
