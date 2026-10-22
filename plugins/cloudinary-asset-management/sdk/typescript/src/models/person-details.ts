import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personStatusSchema, type PersonStatus } from "./person-status.js";
import { thumbnailSchema, type Thumbnail } from "./thumbnail.js";

/** Detailed information about a recognized person. */
export type PersonDetails = {
  /** The unique identifier of the person. */
  id?: string;
  /** The display name of the person, or null if not named. */
  name?: string;
  /** The status of a person. */
  status?: PersonStatus;
  /** The thumbnail image for a person. */
  thumbnail?: Thumbnail;
  /** The date and time when the person was first detected. */
  createdAt?: Date;
  /** The date and time when the person was last updated. */
  updatedAt?: Date;
};

export const personDetailsSchema: Schema<PersonDetails> = s.object<PersonDetails>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => personStatusSchema)),
  thumbnail: s.optional(s.lazy(() => thumbnailSchema)),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
