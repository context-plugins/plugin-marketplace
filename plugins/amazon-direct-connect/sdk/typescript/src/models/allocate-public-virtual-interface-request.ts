import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newPublicVirtualInterfaceAllocationSchema,
  type NewPublicVirtualInterfaceAllocation,
} from "./new-public-virtual-interface-allocation.js";

export type AllocatePublicVirtualInterfaceRequest = {
  /** The ID of the connection on which the public virtual interface is provisioned. */
  connectionId: string;
  /** The ID of the Amazon Web Services account that owns the public virtual interface. */
  ownerAccount: string;
  newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocatePublicVirtualInterfaceRequestSchema: Schema<AllocatePublicVirtualInterfaceRequest> =
  s.object<AllocatePublicVirtualInterfaceRequest>(
    {
      connectionId: s.string(),
      ownerAccount: s.string(),
      newPublicVirtualInterfaceAllocation: newPublicVirtualInterfaceAllocationSchema,
    },
    { additionalProperties: s.json() },
  );
