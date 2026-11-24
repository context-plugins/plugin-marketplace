import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { newBgpPeerSchema, type NewBgpPeer } from "./new-bgp-peer.js";

export type CreateBgpPeerRequest = {
  /** The ID of the virtual interface. */
  virtualInterfaceId?: string;
  newBgpPeer?: NewBgpPeer;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBgpPeerRequestSchema: Schema<CreateBgpPeerRequest> = s.object<CreateBgpPeerRequest>(
  {
    virtualInterfaceId: s.optional(s.string()),
    newBgpPeer: s.optional(s.lazy(() => newBgpPeerSchema)),
    _keysMap: {
      newBgpPeer: "newBGPPeer",
    },
  },
  { additionalProperties: s.json() },
);
