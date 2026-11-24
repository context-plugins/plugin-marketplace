import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newPublicVirtualInterfaceSchema,
  type NewPublicVirtualInterface,
} from "./new-public-virtual-interface.js";

export type CreatePublicVirtualInterfaceRequest = {
  /** The ID of the connection. */
  connectionId: string;
  newPublicVirtualInterface: NewPublicVirtualInterface;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createPublicVirtualInterfaceRequestSchema: Schema<CreatePublicVirtualInterfaceRequest> =
  s.object<CreatePublicVirtualInterfaceRequest>(
    {
      connectionId: s.string(),
      newPublicVirtualInterface: newPublicVirtualInterfaceSchema,
    },
    { additionalProperties: s.json() },
  );
