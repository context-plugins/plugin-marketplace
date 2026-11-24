import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessLevelSchema, type AccessLevel } from "./access-level.js";
import { typeCodeqrIoFoldersApiSchema, type TypeCodeqrIoFoldersApi } from "./type-codeqr-io-folders-api.js";

export type FolderSchema = {
  /** The unique ID of the folder. */
  id: string;
  /** The name of the folder. */
  name: string;
  type: TypeCodeqrIoFoldersApi;
  /** The access level of the folder within the workspace. */
  accessLevel: AccessLevel | null;
  /** The date the folder was created. */
  createdAt: string;
  /** The date the folder was updated. */
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const folderSchemaSchema: Schema<FolderSchema> = s.object<FolderSchema>(
  {
    id: s.string(),
    name: s.string(),
    type: typeCodeqrIoFoldersApiSchema,
    accessLevel: s.nullable(s.lazy(() => accessLevelSchema)),
    createdAt: s.string(),
    updatedAt: s.string(),
  },
  { additionalProperties: s.json() },
);
