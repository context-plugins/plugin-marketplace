import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { virtualInterfaceStateSchema, type VirtualInterfaceState } from "./virtual-interface-state.js";

export type DeleteVirtualInterfaceResponse = {
  /**
   * The state of the virtual interface. The following are the possible values: confirming: The
   * creation of the virtual interface is pending confirmation from the virtual interface owner. If
   * the owner of the virtual interface is different from the owner of the connection on which it is
   * provisioned, then the virtual interface will remain in this state until it is confirmed by the
   * virtual interface owner. verifying: This state only applies to public virtual interfaces. Each
   * public virtual interface needs validation before the virtual interface can be created. pending:
   * A virtual interface is in this s
   */
  virtualInterfaceState?: VirtualInterfaceState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteVirtualInterfaceResponseSchema: Schema<DeleteVirtualInterfaceResponse> =
  s.object<DeleteVirtualInterfaceResponse>(
    {
      virtualInterfaceState: s.optional(s.lazy(() => virtualInterfaceStateSchema)),
    },
    { additionalProperties: s.json() },
  );
