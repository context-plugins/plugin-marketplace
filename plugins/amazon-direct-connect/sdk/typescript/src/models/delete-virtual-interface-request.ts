import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteVirtualInterfaceRequest = {
  /** The ID of the virtual interface. */
  virtualInterfaceId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteVirtualInterfaceRequestSchema: Schema<DeleteVirtualInterfaceRequest> =
  s.object<DeleteVirtualInterfaceRequest>(
    {
      virtualInterfaceId: s.string(),
    },
    { additionalProperties: s.json() },
  );
