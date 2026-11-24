import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Reference to a linked infrastructure node in another diagram. */
export type CloudDiagramInfraNodeRef = {
  /** Infrastructure node ID. */
  id: string;
  /** Parent diagram ID. */
  schemeId: string;
  /** Parent layer ID. */
  ssId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramInfraNodeRefSchema: Schema<CloudDiagramInfraNodeRef> =
  s.object<CloudDiagramInfraNodeRef>(
    {
      id: s.string(),
      schemeId: s.string(),
      ssId: s.string(),
      _keysMap: {
        id: "_id",
        schemeId: "scheme_id",
        ssId: "ss_id",
      },
    },
    { additionalProperties: s.json() },
  );
