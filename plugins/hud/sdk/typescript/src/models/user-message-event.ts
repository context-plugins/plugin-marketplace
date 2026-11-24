import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

export type UserMessageEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  /** @default "user_message" */
  kind?: "user_message";
  text: string;
};

export const userMessageEventSchema: Schema<UserMessageEvent> = s.object<UserMessageEvent>({
  id: s.string(),
  parentId: s.optional(s.lazy(() => parentIdSchema)),
  startedAt: s.optional(s.lazy(() => startedAtSchema)),
  endedAt: s.optional(s.lazy(() => endedAtSchema)),
  seq: s.defaulted(s.int(), 0),
  kind: s.defaulted(s.literal("user_message"), "user_message"),
  text: s.string(),
  _keysMap: {
    parentId: "parent_id",
    startedAt: "started_at",
    endedAt: "ended_at",
  },
});
