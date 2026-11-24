import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssociateVirtualInterfaceRequest = {
  /** The ID of the virtual interface. */
  virtualInterfaceId: string;
  /** The ID of the LAG or connection. */
  connectionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateVirtualInterfaceRequestSchema: Schema<AssociateVirtualInterfaceRequest> =
  s.object<AssociateVirtualInterfaceRequest>(
    {
      virtualInterfaceId: s.string(),
      connectionId: s.string(),
    },
    { additionalProperties: s.json() },
  );
