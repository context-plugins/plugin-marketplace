import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UserBillV3ReportsApi = {
  /** BILL-generated ID of the user. The value begins with `006`. */
  id?: string;
  /** Name of the user */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userBillV3ReportsApiSchema: Schema<UserBillV3ReportsApi> = s.object<UserBillV3ReportsApi>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
