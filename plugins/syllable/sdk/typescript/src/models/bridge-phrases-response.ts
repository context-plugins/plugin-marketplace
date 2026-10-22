import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bridgePhrasesConfigPayload1Schema,
  type BridgePhrasesConfigPayload1,
} from "./bridge-phrases-config-payload1.js";
import { agentsInfo3Schema, type AgentsInfo3 } from "./unions/agents-info3.js";
import { description11Schema, type Description11 } from "./unions/description11.js";
import { editComments2Schema, type EditComments2 } from "./unions/edit-comments2.js";

/**
 * Response model for bridge phrases operations.
 *
 * A bridge phrases config is a named, sub-org-scoped collection of default bridge phrases plus
 * optional per-tool and per-language overrides that can be linked to an agent. For more
 * information, see [Console docs](https://docs.syllable.ai/Resources/BridgePhrases).
 */
export type BridgePhrasesResponse = {
  /** The name of the bridge phrases config. */
  name: string;
  /** Description of the bridge phrases config. */
  description?: Description11;
  /** Default phrases plus per-tool overrides. */
  config?: BridgePhrasesConfigPayload1;
  /** Whether this config is currently marked as the default for its suborg. @default false */
  isDefault?: boolean;
  /** The ID of the bridge phrases config to update. */
  id: number;
  /** Comments for the most recent edit. */
  editComments?: EditComments2;
  /** IDs and names of the agents linked to this bridge phrases config. */
  agentsInfo?: AgentsInfo3;
  /** Timestamp of the last update. */
  updatedAt: Date;
  /** Email of the user who last updated this config. */
  lastUpdatedBy: string;
};

export const bridgePhrasesResponseSchema: Schema<BridgePhrasesResponse> = s.object<BridgePhrasesResponse>({
  name: s.string(),
  description: s.optional(s.lazy(() => description11Schema)),
  config: s.optional(s.lazy(() => bridgePhrasesConfigPayload1Schema)),
  isDefault: s.defaulted(s.boolean(), false),
  id: s.int(),
  editComments: s.optional(s.lazy(() => editComments2Schema)),
  agentsInfo: s.optional(s.lazy(() => agentsInfo3Schema)),
  updatedAt: s.dateTime(),
  lastUpdatedBy: s.string(),
  _keysMap: {
    isDefault: "is_default",
    editComments: "edit_comments",
    agentsInfo: "agents_info",
    updatedAt: "updated_at",
    lastUpdatedBy: "last_updated_by",
  },
});
