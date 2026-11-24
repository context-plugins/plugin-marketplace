import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeDoiTCloudDiagramsApiSchema,
  type TypeDoiTCloudDiagramsApi,
} from "./type-doi-tcloud-diagrams-api.js";

/** A component reference contained within a combiner. */
export type CloudDiagramCombinerItem = {
  /** Component ID. */
  id: string;
  /** Component type. */
  type: TypeDoiTCloudDiagramsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramCombinerItemSchema: Schema<CloudDiagramCombinerItem> =
  s.object<CloudDiagramCombinerItem>(
    {
      id: s.string(),
      type: typeDoiTCloudDiagramsApiSchema,
      _keysMap: {
        id: "_id",
      },
    },
    { additionalProperties: s.json() },
  );
