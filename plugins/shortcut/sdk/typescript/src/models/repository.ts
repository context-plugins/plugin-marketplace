import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

/** Repository refers to a VCS repository. */
export type Repository = {
  /** A string description of this resource. */
  entityType: string;
  /** The shorthand name of the VCS repository. */
  name: string | null;
  /** The VCS provider for the Repository. */
  type: Type4;
  /** The time/date the Repository was updated. */
  updatedAt: Date | null;
  /** The VCS unique identifier for the Repository. */
  externalId: string | null;
  /** The ID associated to the VCS repository in Shortcut. */
  id: number | null;
  /** The URL of the Repository. */
  url: string | null;
  /** The full name of the VCS repository. */
  fullName: string | null;
  /** The time/date the Repository was created. */
  createdAt: Date | null;
};

export const repositorySchema: Schema<Repository> = s.object<Repository>({
  entityType: s.string(),
  name: s.nullable(s.string()),
  type: type4Schema,
  updatedAt: s.nullable(s.dateTime()),
  externalId: s.nullable(s.string()),
  id: s.nullable(s.int()),
  url: s.nullable(s.string()),
  fullName: s.nullable(s.string()),
  createdAt: s.nullable(s.dateTime()),
  _keysMap: {
    entityType: "entity_type",
    updatedAt: "updated_at",
    externalId: "external_id",
    fullName: "full_name",
    createdAt: "created_at",
  },
});
