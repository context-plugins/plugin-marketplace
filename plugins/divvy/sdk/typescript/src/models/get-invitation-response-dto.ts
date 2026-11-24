import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { networkInvitationStatusSchema, type NetworkInvitationStatus } from "./network-invitation-status.js";

/** Invitation status response. */
export type GetInvitationResponseDto = {
  /** BILL-generated ID of the customer or vendor record in your organization */
  id?: string;
  status?: NetworkInvitationStatus;
  /** Payment Network ID (PNI). BILL uses the PNI to send and receive electronic payments. */
  networkId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getInvitationResponseDtoSchema: Schema<GetInvitationResponseDto> =
  s.object<GetInvitationResponseDto>(
    {
      id: s.optional(s.string()),
      status: s.optional(s.lazy(() => networkInvitationStatusSchema)),
      networkId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
