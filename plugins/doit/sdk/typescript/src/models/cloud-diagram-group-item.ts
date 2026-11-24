import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeDoiTCloudDiagramsApiSchema,
  type TypeDoiTCloudDiagramsApi,
} from "./type-doi-tcloud-diagrams-api.js";

/** Reference to a component contained within a group. */
export type CloudDiagramGroupItem = {
  /** Component ID. */
  id: string;
  /** Component type. */
  type: TypeDoiTCloudDiagramsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramGroupItemSchema: Schema<CloudDiagramGroupItem> = s.object<CloudDiagramGroupItem>(
  {
    id: s.string(),
    type: typeDoiTCloudDiagramsApiSchema,
    _keysMap: {
      id: "_id",
    },
  },
  { additionalProperties: s.json() },
);
