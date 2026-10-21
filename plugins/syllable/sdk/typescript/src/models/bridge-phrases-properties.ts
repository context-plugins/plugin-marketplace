import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of bridge phrases fields supported for filtering/sorting on list endpoint. */
export const BridgePhrasesProperties = {
  Name: "name",
  Description: "description",
  UpdatedAt: "updated_at",
  LastUpdatedBy: "last_updated_by",
} as const;
export type BridgePhrasesProperties =
  | (typeof BridgePhrasesProperties)[keyof typeof BridgePhrasesProperties]
  | (string & {});

export const bridgePhrasesPropertiesSchema: EnumSchema<BridgePhrasesProperties> =
  s.enumOf<BridgePhrasesProperties>(BridgePhrasesProperties);
