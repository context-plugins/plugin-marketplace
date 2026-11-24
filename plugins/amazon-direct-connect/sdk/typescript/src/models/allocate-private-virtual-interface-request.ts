import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newPrivateVirtualInterfaceAllocationSchema,
  type NewPrivateVirtualInterfaceAllocation,
} from "./new-private-virtual-interface-allocation.js";

export type AllocatePrivateVirtualInterfaceRequest = {
  /** The ID of the connection on which the private virtual interface is provisioned. */
  connectionId: string;
  /** The ID of the Amazon Web Services account that owns the virtual private interface. */
  ownerAccount: string;
  newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocatePrivateVirtualInterfaceRequestSchema: Schema<AllocatePrivateVirtualInterfaceRequest> =
  s.object<AllocatePrivateVirtualInterfaceRequest>(
    {
      connectionId: s.string(),
      ownerAccount: s.string(),
      newPrivateVirtualInterfaceAllocation: newPrivateVirtualInterfaceAllocationSchema,
    },
    { additionalProperties: s.json() },
  );
