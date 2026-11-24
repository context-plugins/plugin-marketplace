import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newTransitVirtualInterfaceSchema,
  type NewTransitVirtualInterface,
} from "./new-transit-virtual-interface.js";

export type CreateTransitVirtualInterfaceRequest = {
  /** The ID of the connection. */
  connectionId: string;
  newTransitVirtualInterface: NewTransitVirtualInterface;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTransitVirtualInterfaceRequestSchema: Schema<CreateTransitVirtualInterfaceRequest> =
  s.object<CreateTransitVirtualInterfaceRequest>(
    {
      connectionId: s.string(),
      newTransitVirtualInterface: newTransitVirtualInterfaceSchema,
    },
    { additionalProperties: s.json() },
  );
