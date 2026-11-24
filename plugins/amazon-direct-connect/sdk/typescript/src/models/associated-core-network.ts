import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssociatedCoreNetwork = {
  /** The ID of the Cloud WAN core network that the Direct Connect gateway is associated to. */
  id?: string;
  /** The account owner of the Cloud WAN core network. */
  ownerAccount?: string;
  /** the ID of the Direct Connect gateway attachment. */
  attachmentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associatedCoreNetworkSchema: Schema<AssociatedCoreNetwork> = s.object<AssociatedCoreNetwork>(
  {
    id: s.optional(s.string()),
    ownerAccount: s.optional(s.string()),
    attachmentId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
