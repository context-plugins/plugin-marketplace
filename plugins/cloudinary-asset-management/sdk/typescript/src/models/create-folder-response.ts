import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateFolderResponse = {
  /** The name of the folder. */
  name: string;
  /** The full path of the folder. */
  path: string;
  /** The unique identifier for the folder. */
  externalId: string;
  /** The timestamp when the folder was created. */
  createdAt?: Date;
  /** Whether the operation was successful. */
  success?: boolean;
};

export const createFolderResponseSchema: Schema<CreateFolderResponse> = s.object<CreateFolderResponse>({
  name: s.string(),
  path: s.string(),
  externalId: s.string(),
  createdAt: s.optional(s.dateTime()),
  success: s.optional(s.boolean()),
  _keysMap: {
    externalId: "external_id",
    createdAt: "created_at",
  },
});
