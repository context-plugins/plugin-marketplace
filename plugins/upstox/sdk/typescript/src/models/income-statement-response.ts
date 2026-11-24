import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { incomeStatementDataSchema, type IncomeStatementData } from "./income-statement-data.js";
import { statusSchema, type Status } from "./status.js";

export type IncomeStatementResponse = {
  status?: Status;
  data?: IncomeStatementData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incomeStatementResponseSchema: Schema<IncomeStatementResponse> =
  s.object<IncomeStatementResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => incomeStatementDataSchema)),
    },
    { additionalProperties: s.json() },
  );
