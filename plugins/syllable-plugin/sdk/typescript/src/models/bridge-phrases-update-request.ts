import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bridgePhrasesConfigPayload1Schema,
  type BridgePhrasesConfigPayload1,
} from "./bridge-phrases-config-payload1.js";
import { description11Schema, type Description11 } from "./unions/description11.js";
import { editComments2Schema, type EditComments2 } from "./unions/edit-comments2.js";
import { isDefaultSchema, type IsDefault } from "./unions/is-default.js";

/** Request model to update an existing bridge phrases config. */
export type BridgePhrasesUpdateRequest = {
  /** The name of the bridge phrases config. */
  name: string;
  /** Description of the bridge phrases config. */
  description?: Description11;
  /** Default phrases plus per-tool overrides. */
  config?: BridgePhrasesConfigPayload1;
  /**
   * Whether this config should be marked as the default for its suborg. Omit (null) to preserve the
   * existing value; pass true/false to set or unset it. At most one non-deleted config per suborg
   * may be the default; the API returns a 400 if a second default is requested while another is
   * already set.
   */
  isDefault?: IsDefault;
  /** The ID of the bridge phrases config to update. */
  id: number;
  /** Comments for the most recent edit. */
  editComments?: EditComments2;
};

export const bridgePhrasesUpdateRequestSchema: Schema<BridgePhrasesUpdateRequest> =
  s.object<BridgePhrasesUpdateRequest>({
    name: s.string(),
    description: s.optional(s.lazy(() => description11Schema)),
    config: s.optional(s.lazy(() => bridgePhrasesConfigPayload1Schema)),
    isDefault: s.optional(s.lazy(() => isDefaultSchema)),
    id: s.int(),
    editComments: s.optional(s.lazy(() => editComments2Schema)),
    _keysMap: {
      isDefault: "is_default",
      editComments: "edit_comments",
    },
  });
