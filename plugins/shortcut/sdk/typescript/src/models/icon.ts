import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the
 * Shortcut web application.
 */
export type Icon = {
  /** A string description of this resource. */
  entityType: string;
  /** The unique ID of the Icon. */
  id: string;
  /** The time/date that the Icon was created. */
  createdAt: Date;
  /** The time/date that the Icon was updated. */
  updatedAt: Date;
  /** The URL of the Icon. */
  url: string;
};

export const iconSchema: Schema<Icon> = s.object<Icon>({
  entityType: s.string(),
  id: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  url: s.string(),
  _keysMap: {
    entityType: "entity_type",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
