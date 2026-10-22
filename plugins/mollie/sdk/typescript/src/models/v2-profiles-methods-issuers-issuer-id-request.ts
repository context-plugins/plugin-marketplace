import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2ProfilesMethodsIssuersIssuerIdRequest = {
  /**
   * When enabling a voucher issuer, an inbetween party may be involved which you have a contract
   * with. Provide the contract ID for the first time you enable an issuer via this contractor.
   *
   * You can update the contract ID as long as it is not approved yet, by repeating the API call
   * with a different contract ID.
   */
  contractId?: string | null;
};

export const v2ProfilesMethodsIssuersIssuerIdRequestSchema: Schema<V2ProfilesMethodsIssuersIssuerIdRequest> =
  s.object<V2ProfilesMethodsIssuersIssuerIdRequest>({
    contractId: s.optionalNullable(s.string()),
  });
