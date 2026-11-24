import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeDoiTCloudDiagramsApiSchema,
  type TypeDoiTCloudDiagramsApi,
} from "./type-doi-tcloud-diagrams-api.js";

/** Reference to a diagram component, including its parent diagram and layer. */
export type CloudDiagramComponentRef = {
  /** Component ID. */
  id: string;
  /** Component type. */
  type: TypeDoiTCloudDiagramsApi;
  /** Parent diagram ID. */
  schemeId: string;
  /** Parent layer ID. */
  ssId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramComponentRefSchema: Schema<CloudDiagramComponentRef> =
  s.object<CloudDiagramComponentRef>(
    {
      id: s.string(),
      type: typeDoiTCloudDiagramsApiSchema,
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
