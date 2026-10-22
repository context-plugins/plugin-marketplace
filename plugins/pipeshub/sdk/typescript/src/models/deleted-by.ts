import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeletedBy = {
  name?: string | null;
  email?: string | null;
};

export const deletedBySchema: Schema<DeletedBy> = s.object<DeletedBy>({
  name: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.string()),
});
