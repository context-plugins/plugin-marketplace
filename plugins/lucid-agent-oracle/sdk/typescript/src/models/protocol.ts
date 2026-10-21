import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Protocol = {
  protocol: string;
  protocolId: string;
  linkType: string;
  confidence: number;
};

export const protocolSchema: Schema<Protocol> = s.object<Protocol>({
  protocol: s.string(),
  protocolId: s.string(),
  linkType: s.string(),
  confidence: s.float64(),
  _keysMap: {
    protocolId: "protocol_id",
    linkType: "link_type",
  },
});
