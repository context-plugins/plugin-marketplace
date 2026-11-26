import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acceptInviteTypeSchema, type AcceptInviteType } from "./accept-invite-type.js";

/** Accept network invitation */
export type AcceptInvitationRequestDto = {
  /**
   * Payment Network ID (PNI) of the customer or vendor that sent the invitation. BILL uses the PNI
   * to send and receive electronic payments.
   */
  networkId: string;
  type: AcceptInviteType;
  /**
   * BILL-generated ID of the existing vendor or customer record in your organization that you want
   * to connect with. The value begins with `009` (vendor) or `0cu` (customer).
   *
   * When you set this field, you cannot set `name` in your request.
   */
  id?: string | null;
  /**
   * Name of the new vendor or customer record that you want to add in your organization. BILL
   * creates a new record with this name.
   *
   * When you set this field, you cannot set `id` in your request.
   */
  name?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const acceptInvitationRequestDtoProperties: s.Shape<AcceptInvitationRequestDto> = {
  networkId: s.string(),
  type: acceptInviteTypeSchema,
  id: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
};

export const acceptInvitationRequestDtoInternalSchema: Schema<AcceptInvitationRequestDto> =
  s.object<AcceptInvitationRequestDto>(acceptInvitationRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const acceptInvitationRequestDtoSchema: Schema<AcceptInvitationRequestDto> = s.lazySchema(() =>
  s.object<AcceptInvitationRequestDto>(
    {
      ...acceptInvitationRequestDtoProperties,
      networkId: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
