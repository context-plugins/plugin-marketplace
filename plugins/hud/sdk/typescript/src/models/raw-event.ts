import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

/**
 * Fallback for spans we don't know how to project.
 *
 * Covers new SDK categories and custom user \@instrument calls. Kept so the viewer can still
 * display *something* without dropping data.
 */
export type RawEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  /** @default "raw" */
  kind?: "raw";
  category: string;
  name: string;
  attributes?: Record<string, unknown>;
};

export const rawEventSchema: Schema<RawEvent> = s.object<RawEvent>({
  id: s.string(),
  parentId: s.optional(s.lazy(() => parentIdSchema)),
  startedAt: s.optional(s.lazy(() => startedAtSchema)),
  endedAt: s.optional(s.lazy(() => endedAtSchema)),
  seq: s.defaulted(s.int(), 0),
  kind: s.defaulted(s.literal("raw"), "raw"),
  category: s.string(),
  name: s.string(),
  attributes: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    parentId: "parent_id",
    startedAt: "started_at",
    endedAt: "ended_at",
  },
});
