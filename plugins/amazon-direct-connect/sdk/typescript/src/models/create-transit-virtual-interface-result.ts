import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { virtualInterfaceSchema, type VirtualInterface } from "./virtual-interface.js";

export type CreateTransitVirtualInterfaceResult = {
  virtualInterface?: VirtualInterface;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTransitVirtualInterfaceResultSchema: Schema<CreateTransitVirtualInterfaceResult> =
  s.object<CreateTransitVirtualInterfaceResult>(
    {
      virtualInterface: s.optional(s.lazy(() => virtualInterfaceSchema)),
    },
    { additionalProperties: s.json() },
  );
