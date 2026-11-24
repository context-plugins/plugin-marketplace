import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newTransitVirtualInterfaceAllocationSchema,
  type NewTransitVirtualInterfaceAllocation,
} from "./new-transit-virtual-interface-allocation.js";

export type AllocateTransitVirtualInterfaceRequest = {
  /** The ID of the connection on which the transit virtual interface is provisioned. */
  connectionId: string;
  /** The ID of the Amazon Web Services account that owns the transit virtual interface. */
  ownerAccount: string;
  newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocateTransitVirtualInterfaceRequestSchema: Schema<AllocateTransitVirtualInterfaceRequest> =
  s.object<AllocateTransitVirtualInterfaceRequest>(
    {
      connectionId: s.string(),
      ownerAccount: s.string(),
      newTransitVirtualInterfaceAllocation: newTransitVirtualInterfaceAllocationSchema,
    },
    { additionalProperties: s.json() },
  );
