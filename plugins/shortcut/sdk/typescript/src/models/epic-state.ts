import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Epic State is any of the at least 3 columns. Epic States correspond to one of 3 types: Unstarted,
 * Started, or Done.
 */
export type EpicState = {
  /** The description of what sort of Epics belong in that Epic State. */
  description: string;
  /** A string description of this resource. */
  entityType: string;
  /** The hex color for this Epic State. */
  color?: string;
  /** The Epic State's name. */
  name: string;
  globalId: string;
  /** The type of Epic State (Unstarted, Started, or Done) */
  type: string;
  /** When the Epic State was last updated. */
  updatedAt: Date;
  /** The unique ID of the Epic State. */
  id: number;
  /** The position that the Epic State is in, starting with 0 at the left. */
  position: number;
  /** The time/date the Epic State was created. */
  createdAt: Date;
};

const epicStateProperties: s.Shape<EpicState> = {
  description: s.string(),
  entityType: s.string(),
  color: s.optional(s.string()),
  name: s.string(),
  globalId: s.string(),
  type: s.string(),
  updatedAt: s.dateTime(),
  id: s.int(),
  position: s.int(),
  createdAt: s.dateTime(),
  _keysMap: {
    entityType: "entity_type",
    globalId: "global_id",
    updatedAt: "updated_at",
    createdAt: "created_at",
  },
};

export const epicStateInternalSchema: Schema<EpicState> = s.object<EpicState>(epicStateProperties);

export const epicStateSchema: Schema<EpicState> = s.lazySchema(() =>
  s.object<EpicState>({
    ...epicStateProperties,
    color: s.optional(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
  }),
);
