import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressDtoSchema, type AddressDto } from "./address-dto.js";
import { managedBySchema, type ManagedBy } from "./managed-by.js";
import { networkAccountTypeSchema, type NetworkAccountType } from "./network-account-type.js";

/** An organization in the BILL network or verified national vendor network. */
export type Network = {
  /**
   * Payment Network ID (PNI) of the organization. BILL uses the PNI to send and receive electronic
   * payments.
   */
  id?: string;
  /** Organization name */
  name?: string;
  type?: NetworkAccountType;
  /** Organization address */
  addresses?: AddressDto[];
  managedBy?: ManagedBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const networkSchema: Schema<Network> = s.object<Network>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => networkAccountTypeSchema)),
    addresses: s.optional(s.array(s.lazy(() => addressDtoSchema))),
    managedBy: s.optional(s.lazy(() => managedBySchema)),
  },
  { additionalProperties: s.json() },
);
