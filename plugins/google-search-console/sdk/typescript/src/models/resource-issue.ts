import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blockedResource1Schema, type BlockedResource1 } from "./blocked-resource1.js";

/** Information about a resource with issue. */
export type ResourceIssue = {
  /** Describes a blocked resource issue. */
  blockedResource?: BlockedResource1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceIssueSchema: Schema<ResourceIssue> = s.object<ResourceIssue>(
  {
    blockedResource: s.optional(s.lazy(() => blockedResource1Schema)),
  },
  { additionalProperties: s.json() },
);
