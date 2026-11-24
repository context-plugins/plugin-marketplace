import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignalsMetadataResponseSignalsItemsPathsItems = {
  /**
   * JSON path inside the signal `data` payload, usable in queries as e.g. `data.<path>::String`.
   */
  path: string;
  /** ClickHouse dynamic types observed for this path. */
  types: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalsMetadataResponseSignalsItemsPathsItemsSchema: Schema<SignalsMetadataResponseSignalsItemsPathsItems> =
  s.object<SignalsMetadataResponseSignalsItemsPathsItems>(
    {
      path: s.string(),
      types: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
