import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { account1Schema, type Account1 } from "./account1.js";

/** Create a chart of accounts */
export type CreateClassificationChartOfAccountsRequestDto = {
  /** Chart of accounts name */
  name: string;
  /** Chart of accounts description */
  description?: string;
  /**
   * BILL-generated ID of the parent chart of accounts. You can set this field if this chart of
   * accounts is a child object.
   */
  parentId?: string;
  account?: Account1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createClassificationChartOfAccountsRequestDtoProperties: s.Shape<CreateClassificationChartOfAccountsRequestDto> =
  {
    name: s.string(),
    description: s.optional(s.string()),
    parentId: s.optional(s.string()),
    account: s.optional(s.lazy(() => account1Schema)),
  };

export const createClassificationChartOfAccountsRequestDtoInternalSchema: Schema<CreateClassificationChartOfAccountsRequestDto> =
  s.object<CreateClassificationChartOfAccountsRequestDto>(
    createClassificationChartOfAccountsRequestDtoProperties,
    { additionalProperties: s.json() },
  );

export const createClassificationChartOfAccountsRequestDtoSchema: Schema<CreateClassificationChartOfAccountsRequestDto> =
  s.lazySchema(() =>
    s.object<CreateClassificationChartOfAccountsRequestDto>(
      {
        ...createClassificationChartOfAccountsRequestDtoProperties,
        name: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
