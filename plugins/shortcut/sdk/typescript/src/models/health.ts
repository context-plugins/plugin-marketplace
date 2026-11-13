import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";

/** The current health status of the Epic. */
export type Health = {
  /** A string description of this resource. */
  entityType: string;
  /** The ID of the permission who created or updated the Health record. */
  authorId?: string;
  /** The ID of the Epic associated with this Health record. */
  epicId?: number;
  /** The ID of the Objective associated with this Health record. */
  objectiveId?: number;
  /** The time that the Health record was updated. */
  updatedAt?: Date;
  /** The health status of the Epic or Objective. */
  status: Status2;
  /** The unique ID of the Health record. */
  id: string | null;
  /** The time that the Health record was created. */
  createdAt?: Date;
  /** The text of the Health record. */
  text?: string;
};

export const healthSchema: Schema<Health> = s.object<Health>({
  entityType: s.string(),
  authorId: s.optional(s.string()),
  epicId: s.optional(s.int()),
  objectiveId: s.optional(s.int()),
  updatedAt: s.optional(s.dateTime()),
  status: status2Schema,
  id: s.nullable(s.string()),
  createdAt: s.optional(s.dateTime()),
  text: s.optional(s.string()),
  _keysMap: {
    entityType: "entity_type",
    authorId: "author_id",
    epicId: "epic_id",
    objectiveId: "objective_id",
    updatedAt: "updated_at",
    createdAt: "created_at",
  },
});
