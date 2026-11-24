import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An action representing a Story Comment being created. */
export type HistoryActionStoryCommentCreate = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "create" */
  action?: "create";
  /** The application URL of the Story Comment. */
  appUrl: string;
  /** The Member ID of who created the Story Comment. */
  authorId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const historyActionStoryCommentCreateProperties: s.Shape<HistoryActionStoryCommentCreate> = {
  id: s.int(),
  entityType: s.string(),
  action: s.defaulted(s.literal("create"), "create"),
  appUrl: s.string(),
  authorId: s.string(),
  _keysMap: {
    entityType: "entity_type",
    appUrl: "app_url",
    authorId: "author_id",
  },
};

export const historyActionStoryCommentCreateInternalSchema: Schema<HistoryActionStoryCommentCreate> =
  s.object<HistoryActionStoryCommentCreate>(historyActionStoryCommentCreateProperties, {
    additionalProperties: s.json(),
  });

export const historyActionStoryCommentCreateSchema: Schema<HistoryActionStoryCommentCreate> = s.lazySchema(
  () =>
    s.object<HistoryActionStoryCommentCreate>(
      {
        ...historyActionStoryCommentCreateProperties,
        appUrl: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
      },
      { additionalProperties: s.json() },
    ),
);
