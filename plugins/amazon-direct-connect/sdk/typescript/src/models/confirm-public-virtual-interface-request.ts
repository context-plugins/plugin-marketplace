import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConfirmPublicVirtualInterfaceRequest = {
  /** The ID of the virtual interface. */
  virtualInterfaceId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const confirmPublicVirtualInterfaceRequestSchema: Schema<ConfirmPublicVirtualInterfaceRequest> =
  s.object<ConfirmPublicVirtualInterfaceRequest>(
    {
      virtualInterfaceId: s.string(),
    },
    { additionalProperties: s.json() },
  );
