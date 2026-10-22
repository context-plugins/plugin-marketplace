import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { groupTypeSchema, type GroupType } from "./group-type.js";

export type Group = {
  /** The type of user group */
  type: GroupType;
  /** A unique identifier for the group. May be the same as name. */
  id: string;
  /** Name of the group. */
  name?: string;
  /** Datasource instance if the group belongs to one e.g. external groups. */
  datasourceInstance?: string;
  /** identifier for greenlist provisioning, aka sciokey */
  provisioningId?: string;
};

export const groupSchema: Schema<Group> = s.object<Group>({
  type: groupTypeSchema,
  id: s.string(),
  name: s.optional(s.string()),
  datasourceInstance: s.optional(s.string()),
  provisioningId: s.optional(s.string()),
});
