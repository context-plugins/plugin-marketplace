import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { groupKindSchema, type GroupKind } from "./group-kind.js";
import { symbolPeerSchema, type SymbolPeer } from "./symbol-peer.js";

export type SymbolPeers = {
  ticker: string;
  /** Industry (or sector) label the peers share; empty if none. */
  group: string;
  /** Whether the peers were grouped by industry or the broader sector. */
  groupKind: GroupKind;
  peers: SymbolPeer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const symbolPeersSchema: Schema<SymbolPeers> = s.object<SymbolPeers>(
  {
    ticker: s.string(),
    group: s.string(),
    groupKind: groupKindSchema,
    peers: s.array(s.lazy(() => symbolPeerSchema)),
    _keysMap: {
      groupKind: "group_kind",
    },
  },
  { additionalProperties: s.json() },
);
