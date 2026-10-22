import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bridgePhraseMessages2Schema, type BridgePhraseMessages2 } from "./bridge-phrase-messages2.js";

/** Per-tool bridge phrase override entry. */
export type ToolBridgePhraseConfig = {
  /** Name of the tool these phrases override. */
  toolName: string;
  /** Phrase messages for this tool. */
  phrases: BridgePhraseMessages2;
};

export const toolBridgePhraseConfigSchema: Schema<ToolBridgePhraseConfig> = s.object<ToolBridgePhraseConfig>({
  toolName: s.string(),
  phrases: bridgePhraseMessages2Schema,
  _keysMap: {
    toolName: "tool_name",
  },
});
