import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deleteCommentsSchema, type DeleteComments } from "./unions/delete-comments.js";

export type BodyOrganizationsDelete = {
  /** Comments explaining the deletion */
  deleteComments?: DeleteComments;
};

export const bodyOrganizationsDeleteSchema: Schema<BodyOrganizationsDelete> =
  s.object<BodyOrganizationsDelete>({
    deleteComments: s.optional(s.lazy(() => deleteCommentsSchema)),
    _keysMap: {
      deleteComments: "delete_comments",
    },
  });
