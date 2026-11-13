import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentDurationInternalSchema,
  contentDurationSchema,
  type ContentDuration,
} from "./content-duration.js";
import { deadlineInternalSchema, deadlineSchema, type Deadline } from "./unions/deadline.js";
import { dueInternalSchema, dueSchema, type Due } from "./unions/due.js";

export type ContentItem = {
  /** Opaque task reference, unique within this graph. */
  id: string;
  /** Parent task reference within this graph. */
  parentId?: string | null;
  /** Section reference within this graph. */
  sectionId?: string | null;
  /** Task text. May be empty only when labels are present. */
  content?: string;
  /** Task description. */
  description?: string;
  /** Sync priority: 1 is normal and 4 is urgent. @default 1 */
  priority?: number;
  /** Label names attached to the task. */
  labels?: string[];
  /**
   * Resolved object or raw string/language (v1.6+). Omission or null clears the due in this
   * replacement graph.
   */
  due?: Due | null;
  /** Absolute date object or raw string/language (v1.6+). Omission or null clears the deadline. */
  deadline?: Deadline | null;
  /** Task duration. */
  duration?: ContentDuration | null;
  /** Assignee user ID. */
  responsibleUid?: string | null;
  /** Assigning user ID. */
  assignedByUid?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentItemProperties: s.Shape<ContentItem> = {
  id: s.string(),
  parentId: s.optionalNullable(s.string()),
  sectionId: s.optionalNullable(s.string()),
  content: s.optional(s.string()),
  description: s.optional(s.string()),
  priority: s.defaulted(s.int(), 1),
  labels: s.optional(s.array(s.string())),
  due: s.optionalNullable(s.lazy(() => dueInternalSchema)),
  deadline: s.optionalNullable(s.lazy(() => deadlineInternalSchema)),
  duration: s.optionalNullable(s.lazy(() => contentDurationInternalSchema)),
  responsibleUid: s.optionalNullable(s.string()),
  assignedByUid: s.optionalNullable(s.string()),
  _keysMap: {
    parentId: "parent_id",
    sectionId: "section_id",
    responsibleUid: "responsible_uid",
    assignedByUid: "assigned_by_uid",
  },
};

export const contentItemInternalSchema: Schema<ContentItem> = s.object<ContentItem>(contentItemProperties, {
  additionalProperties: s.json(),
});

export const contentItemSchema: Schema<ContentItem> = s.lazySchema(() =>
  s.object<ContentItem>(
    {
      ...contentItemProperties,
      id: s.string().check(s.minLength(1), s.maxLength(64)),
      content: s.optional(s.string().check(s.maxLength(2048))),
      description: s.optional(s.string().check(s.maxLength(16383))),
      priority: s.defaulted(s.int().check(s.gte(1), s.lte(4)), 1),
      labels: s.optional(s.array(s.string()).check(s.maxLength(100))),
      due: s.optionalNullable(s.lazy(() => dueSchema)),
      deadline: s.optionalNullable(s.lazy(() => deadlineSchema)),
      duration: s.optionalNullable(s.lazy(() => contentDurationSchema)),
      responsibleUid: s.optionalNullable(s.string().check(s.pattern("^\\d+$"))),
      assignedByUid: s.optionalNullable(s.string().check(s.pattern("^\\d+$"))),
    },
    { additionalProperties: s.json() },
  ),
);
