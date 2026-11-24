import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectPolicy = {
  /** The Amazon Resource Name (ARN) of the project to which the project policy is attached. */
  projectArn?: string;
  /** The name of the project policy. */
  policyName?: string;
  /** The revision ID of the project policy. */
  policyRevisionId?: string;
  /** The JSON document for the project policy. */
  policyDocument?: string;
  /** The Unix datetime for the creation of the project policy. */
  creationTimestamp?: Date;
  /** The Unix datetime for when the project policy was last updated. */
  lastUpdatedTimestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectPolicySchema: Schema<ProjectPolicy> = s.object<ProjectPolicy>(
  {
    projectArn: s.optional(s.string()),
    policyName: s.optional(s.string()),
    policyRevisionId: s.optional(s.string()),
    policyDocument: s.optional(s.string()),
    creationTimestamp: s.optional(s.dateTime()),
    lastUpdatedTimestamp: s.optional(s.dateTime()),
    _keysMap: {
      projectArn: "ProjectArn",
      policyName: "PolicyName",
      policyRevisionId: "PolicyRevisionId",
      policyDocument: "PolicyDocument",
      creationTimestamp: "CreationTimestamp",
      lastUpdatedTimestamp: "LastUpdatedTimestamp",
    },
  },
  { additionalProperties: s.json() },
);
