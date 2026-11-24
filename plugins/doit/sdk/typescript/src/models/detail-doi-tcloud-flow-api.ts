import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DetailDoiTCloudFlowApi = {
  nodeId: string;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detailDoiTCloudFlowApiSchema: Schema<DetailDoiTCloudFlowApi> = s.object<DetailDoiTCloudFlowApi>(
  {
    nodeId: s.string(),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
