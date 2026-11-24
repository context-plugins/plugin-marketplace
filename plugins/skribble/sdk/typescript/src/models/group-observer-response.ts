import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { groupInfoSchema, type GroupInfo } from "./group-info.js";

export type GroupObserverResponse = {
  /** Unique observer identifier. */
  id: string;
  /** Observer type. @default "GROUP" */
  type?: "GROUP";
  /** Timestamp when the observer was invited. */
  invitedAt: Date;
  /** Identifier of the user or API key that invited the observer. */
  invitedBy: string;
  /** Information about the group observer. */
  groupInfo: GroupInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupObserverResponseSchema: Schema<GroupObserverResponse> = s.object<GroupObserverResponse>(
  {
    id: s.string(),
    type: s.defaulted(s.literal("GROUP"), "GROUP"),
    invitedAt: s.dateTime(),
    invitedBy: s.string(),
    groupInfo: groupInfoSchema,
    _keysMap: {
      invitedAt: "invited_at",
      invitedBy: "invited_by",
      groupInfo: "group_info",
    },
  },
  { additionalProperties: s.json() },
);
