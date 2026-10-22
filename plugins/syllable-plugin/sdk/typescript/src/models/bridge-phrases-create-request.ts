import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bridgePhrasesConfigPayload1Schema,
  type BridgePhrasesConfigPayload1,
} from "./bridge-phrases-config-payload1.js";
import { description11Schema, type Description11 } from "./unions/description11.js";

/** Request model to create a bridge phrases config. */
export type BridgePhrasesCreateRequest = {
  /** The name of the bridge phrases config. */
  name: string;
  /** Description of the bridge phrases config. */
  description?: Description11;
  /** Default phrases plus per-tool overrides. */
  config?: BridgePhrasesConfigPayload1;
  /**
   * Whether this config should be marked as the default for its suborg. At most one non-deleted
   * config per suborg may be the default; the API returns a 400 if a second default is requested
   * while another is already set.
   *
   * @default false
   */
  isDefault?: boolean;
};

export const bridgePhrasesCreateRequestSchema: Schema<BridgePhrasesCreateRequest> =
  s.object<BridgePhrasesCreateRequest>({
    name: s.string(),
    description: s.optional(s.lazy(() => description11Schema)),
    config: s.optional(s.lazy(() => bridgePhrasesConfigPayload1Schema)),
    isDefault: s.defaulted(s.boolean(), false),
    _keysMap: {
      isDefault: "is_default",
    },
  });
