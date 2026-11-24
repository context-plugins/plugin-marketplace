import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type AssociatedGateway = {
  /** The ID of the associated gateway. */
  id?: string;
  /** The type of associated gateway. */
  type?: Type;
  /**
   * The ID of the Amazon Web Services account that owns the associated virtual private gateway or
   * transit gateway.
   */
  ownerAccount?: string;
  /** The Region where the associated gateway is located. */
  region?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associatedGatewaySchema: Schema<AssociatedGateway> = s.object<AssociatedGateway>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeSchema)),
    ownerAccount: s.optional(s.string()),
    region: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
