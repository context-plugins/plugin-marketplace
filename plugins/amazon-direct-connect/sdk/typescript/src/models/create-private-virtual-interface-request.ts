import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newPrivateVirtualInterfaceSchema,
  type NewPrivateVirtualInterface,
} from "./new-private-virtual-interface.js";

export type CreatePrivateVirtualInterfaceRequest = {
  /** The ID of the connection. */
  connectionId: string;
  newPrivateVirtualInterface: NewPrivateVirtualInterface;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createPrivateVirtualInterfaceRequestSchema: Schema<CreatePrivateVirtualInterfaceRequest> =
  s.object<CreatePrivateVirtualInterfaceRequest>(
    {
      connectionId: s.string(),
      newPrivateVirtualInterface: newPrivateVirtualInterfaceSchema,
    },
    { additionalProperties: s.json() },
  );
