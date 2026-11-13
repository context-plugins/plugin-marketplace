import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A class with fields representing a SectionView which will be returned to clients in a sync (or
 * sync-like) response.
 */
export type SectionSyncView = {
  /** String ID of the section. */
  id: string;
  /** String ID of the user who owns the section. */
  userId: string;
  /** String ID of the project that contains the section. */
  projectId: string;
  /** Date and time when the section was created. */
  addedAt: Date;
  /** Date and time when the section was last updated, or `null` if unknown. */
  updatedAt: Date | null;
  /** Date and time when the section was archived, or `null` if it is active. */
  archivedAt: Date | null;
  /** Section name. */
  name: string;
  /** Section description, or `null` if it has none. */
  description: string | null;
  /** Position of the section in the project. */
  sectionOrder: number;
  /**
   * Fractional-indexing order key: sections sort by comparing keys lexicographically within a
   * project. May be `null` for projects not yet migrated.
   */
  orderKey: string | null;
  /** Whether the section is collapsed in the user's view. */
  isCollapsed: boolean;
  /** Whether the section is archived. */
  isArchived: boolean;
  /** Whether the section is deleted. */
  isDeleted: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionSyncViewSchema: Schema<SectionSyncView> = s.object<SectionSyncView>(
  {
    id: s.string(),
    userId: s.string(),
    projectId: s.string(),
    addedAt: s.dateTime(),
    updatedAt: s.nullable(s.dateTime()),
    archivedAt: s.nullable(s.dateTime()),
    name: s.string(),
    description: s.nullable(s.string()),
    sectionOrder: s.int(),
    orderKey: s.nullable(s.string()),
    isCollapsed: s.boolean(),
    isArchived: s.boolean(),
    isDeleted: s.boolean(),
    _keysMap: {
      userId: "user_id",
      projectId: "project_id",
      addedAt: "added_at",
      updatedAt: "updated_at",
      archivedAt: "archived_at",
      sectionOrder: "section_order",
      orderKey: "order_key",
      isCollapsed: "is_collapsed",
      isArchived: "is_archived",
      isDeleted: "is_deleted",
    },
  },
  { additionalProperties: s.json() },
);
