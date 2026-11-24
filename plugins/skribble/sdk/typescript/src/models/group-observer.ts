import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GroupObserver = {
  /** @default "GROUP" */
  type?: "GROUP";
  /** Unique group identifier. */
  groupId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupObserverSchema: Schema<GroupObserver> = s.object<GroupObserver>(
  {
    type: s.defaulted(s.literal("GROUP"), "GROUP"),
    groupId: s.string(),
    _keysMap: {
      groupId: "group_id",
    },
  },
  { additionalProperties: s.json() },
);
