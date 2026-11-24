import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonDoiTCloudFlowApiSchema, type ReasonDoiTCloudFlowApi } from "./reason-doi-tcloud-flow-api.js";

export type IncompleteNode = {
  id?: string;
  name?: string;
  reason?: ReasonDoiTCloudFlowApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incompleteNodeSchema: Schema<IncompleteNode> = s.object<IncompleteNode>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    reason: s.optional(s.lazy(() => reasonDoiTCloudFlowApiSchema)),
  },
  { additionalProperties: s.json() },
);
