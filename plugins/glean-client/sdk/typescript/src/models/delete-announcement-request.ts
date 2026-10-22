import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteAnnouncementRequest = {
  /** The opaque id of the announcement to be deleted. */
  id: number;
};

export const deleteAnnouncementRequestSchema: Schema<DeleteAnnouncementRequest> =
  s.object<DeleteAnnouncementRequest>({
    id: s.int(),
  });
