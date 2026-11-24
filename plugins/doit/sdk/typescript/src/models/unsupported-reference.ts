import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kindDoiTCloudFlowApiSchema, type KindDoiTCloudFlowApi } from "./kind-doi-tcloud-flow-api.js";

export type UnsupportedReference = {
  nodeKey: string;
  kind: KindDoiTCloudFlowApi;
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unsupportedReferenceSchema: Schema<UnsupportedReference> = s.object<UnsupportedReference>(
  {
    nodeKey: s.string(),
    kind: kindDoiTCloudFlowApiSchema,
    detail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
