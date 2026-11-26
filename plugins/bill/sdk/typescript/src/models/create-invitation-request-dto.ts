import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { networkTypeSchema, type NetworkType } from "./network-type.js";
import {
  rppsInformation2InternalSchema,
  rppsInformation2Schema,
  type RppsInformation2,
} from "./rpps-information2.js";

/** Create an organization in the BILL network */
export type CreateInvitationRequestDto = {
  /**
   * Payment Network ID (PNI) of the organization you want to connect with. For a verified national
   * vendor, the value begins with `0rv`. BILL uses the PNI to send and receive electronic payments.
   *
   * You can retrieve `networkId` from your `GET /v3/network` search result.
   */
  networkId: string;
  networkType: NetworkType;
  rppsInformation?: RppsInformation2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createInvitationRequestDtoProperties: s.Shape<CreateInvitationRequestDto> = {
  networkId: s.string(),
  networkType: networkTypeSchema,
  rppsInformation: s.optional(s.lazy(() => rppsInformation2InternalSchema)),
};

export const createInvitationRequestDtoInternalSchema: Schema<CreateInvitationRequestDto> =
  s.object<CreateInvitationRequestDto>(createInvitationRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const createInvitationRequestDtoSchema: Schema<CreateInvitationRequestDto> = s.lazySchema(() =>
  s.object<CreateInvitationRequestDto>(
    {
      ...createInvitationRequestDtoProperties,
      networkId: s.string().check(s.minLength(1)),
      rppsInformation: s.optional(s.lazy(() => rppsInformation2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
