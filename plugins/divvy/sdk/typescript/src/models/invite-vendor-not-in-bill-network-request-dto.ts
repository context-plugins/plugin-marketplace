import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Invite a vendor not in BILL network */
export type InviteVendorNotInBillNetworkRequestDto = {
  /** Vendor email address */
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const inviteVendorNotInBillNetworkRequestDtoProperties: s.Shape<InviteVendorNotInBillNetworkRequestDto> = {
  email: s.string(),
};

export const inviteVendorNotInBillNetworkRequestDtoInternalSchema: Schema<InviteVendorNotInBillNetworkRequestDto> =
  s.object<InviteVendorNotInBillNetworkRequestDto>(inviteVendorNotInBillNetworkRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const inviteVendorNotInBillNetworkRequestDtoSchema: Schema<InviteVendorNotInBillNetworkRequestDto> =
  s.lazySchema(() =>
    s.object<InviteVendorNotInBillNetworkRequestDto>(
      {
        ...inviteVendorNotInBillNetworkRequestDtoProperties,
        email: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
