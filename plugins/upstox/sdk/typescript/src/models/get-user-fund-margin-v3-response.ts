import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { userFundMarginV3Data2Schema, type UserFundMarginV3Data2 } from "./user-fund-margin-v3-data2.js";

export type GetUserFundMarginV3Response = {
  status?: Status;
  /** Response data for fund and margin v3 */
  data?: UserFundMarginV3Data2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getUserFundMarginV3ResponseSchema: Schema<GetUserFundMarginV3Response> =
  s.object<GetUserFundMarginV3Response>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => userFundMarginV3Data2Schema)),
    },
    { additionalProperties: s.json() },
  );
