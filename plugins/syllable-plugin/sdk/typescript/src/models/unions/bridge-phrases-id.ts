import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Internal ID of the bridge phrases config associated with the agent */
export type BridgePhrasesId = number;

export const bridgePhrasesIdSchema: Schema<BridgePhrasesId> = s.of<BridgePhrasesId>(s.union([s.int()]));
