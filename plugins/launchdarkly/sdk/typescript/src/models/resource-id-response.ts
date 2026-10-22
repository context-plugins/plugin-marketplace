import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceIdResponse = {
  kind?: string;
  projectKey?: string;
  environmentKey?: string;
  flagKey?: string;
  key?: string;
};

export const resourceIdResponseSchema: Schema<ResourceIdResponse> = s.object<ResourceIdResponse>({
  kind: s.optional(s.string()),
  projectKey: s.optional(s.string()),
  environmentKey: s.optional(s.string()),
  flagKey: s.optional(s.string()),
  key: s.optional(s.string()),
});
