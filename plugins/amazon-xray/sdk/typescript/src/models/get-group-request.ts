import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetGroupRequest = {
  /** The case-sensitive name of the group. */
  groupName?: string;
  /** The ARN of the group that was generated on creation. */
  groupArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getGroupRequestSchema: Schema<GetGroupRequest> = s.object<GetGroupRequest>(
  {
    groupName: s.optional(s.string()),
    groupArn: s.optional(s.string()),
    _keysMap: {
      groupName: "GroupName",
      groupArn: "GroupARN",
    },
  },
  { additionalProperties: s.json() },
);
