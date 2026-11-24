import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksPlatformPayeesApiSchema, type LinksPlatformPayeesApi } from "./links-platform-payees-api.js";
import { payeeTypeSchema, type PayeeType } from "./payee-type.js";

export type PayeeSummary = {
  /** Always 'payee'. */
  type: string;
  /** The unique identifier for the payee. */
  id: string;
  /** A user-defined nickname for the payee. */
  nickname?: string;
  /** A description of the payee. */
  description?: string;
  /** The type of payee. */
  payeeType: PayeeType;
  /** The connection ID associated with this payee. */
  connectionId?: string;
  /** The date and time when the payee was created. */
  createdDate?: Date;
  links: LinksPlatformPayeesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payeeSummarySchema: Schema<PayeeSummary> = s.object<PayeeSummary>(
  {
    type: s.string(),
    id: s.string(),
    nickname: s.optional(s.string()),
    description: s.optional(s.string()),
    payeeType: payeeTypeSchema,
    connectionId: s.optional(s.string()),
    createdDate: s.optional(s.dateTime()),
    links: linksPlatformPayeesApiSchema,
  },
  { additionalProperties: s.json() },
);
