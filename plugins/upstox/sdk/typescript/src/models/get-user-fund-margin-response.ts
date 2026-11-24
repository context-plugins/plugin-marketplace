import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { userFundMarginDataSchema, type UserFundMarginData } from "./user-fund-margin-data.js";

export type GetUserFundMarginResponse = {
  status?: Status;
  /** Response data for Balance */
  data?: Record<string, UserFundMarginData>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getUserFundMarginResponseSchema: Schema<GetUserFundMarginResponse> =
  s.object<GetUserFundMarginResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(
        s.record(
          s.string(),
          s.lazy(() => userFundMarginDataSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
