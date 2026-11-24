import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billerPayeeDetailsSchema, type BillerPayeeDetails } from "./biller-payee-details.js";
import {
  digitalWalletPayeeDetailsSchema,
  type DigitalWalletPayeeDetails,
} from "./digital-wallet-payee-details.js";
import { domesticPayeeDetailsSchema, type DomesticPayeeDetails } from "./domestic-payee-details.js";
import {
  internationalPayeeDetailsSchema,
  type InternationalPayeeDetails,
} from "./international-payee-details.js";
import { linksPlatformPayeesApiSchema, type LinksPlatformPayeesApi } from "./links-platform-payees-api.js";
import { payeeTypeSchema, type PayeeType } from "./payee-type.js";

export type PayeeDetailsResponse = {
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
  /** Details specific to domestic payees. */
  domestic?: DomesticPayeeDetails;
  /** Details specific to biller payees. */
  biller?: BillerPayeeDetails;
  /** Details specific to international payees. */
  international?: InternationalPayeeDetails;
  /** Details specific to digital wallet payees. */
  digitalWallet?: DigitalWalletPayeeDetails;
  links: LinksPlatformPayeesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payeeDetailsResponseSchema: Schema<PayeeDetailsResponse> = s.object<PayeeDetailsResponse>(
  {
    type: s.string(),
    id: s.string(),
    nickname: s.optional(s.string()),
    description: s.optional(s.string()),
    payeeType: payeeTypeSchema,
    connectionId: s.optional(s.string()),
    createdDate: s.optional(s.dateTime()),
    domestic: s.optional(s.lazy(() => domesticPayeeDetailsSchema)),
    biller: s.optional(s.lazy(() => billerPayeeDetailsSchema)),
    international: s.optional(s.lazy(() => internationalPayeeDetailsSchema)),
    digitalWallet: s.optional(s.lazy(() => digitalWalletPayeeDetailsSchema)),
    links: linksPlatformPayeesApiSchema,
  },
  { additionalProperties: s.json() },
);
