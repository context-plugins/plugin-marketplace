import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { folderTypeSchema, type FolderType } from "./folder-type.js";

export type ValueUiPathOrchestratorFoldersApi = {
  /** Unique folder identifier used in X-UIPATH-OrganizationUnitId */
  id?: number;
  /** Unique GUID key for the folder */
  key?: string;
  /** Display name of the folder */
  displayName?: string;
  /** Full path of the folder including parent hierarchy */
  fullyQualifiedName?: string;
  /** Type classification of the folder */
  folderType?: FolderType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueUiPathOrchestratorFoldersApiSchema: Schema<ValueUiPathOrchestratorFoldersApi> =
  s.object<ValueUiPathOrchestratorFoldersApi>(
    {
      id: s.optional(s.int()),
      key: s.optional(s.string()),
      displayName: s.optional(s.string()),
      fullyQualifiedName: s.optional(s.string()),
      folderType: s.optional(s.lazy(() => folderTypeSchema)),
      _keysMap: {
        id: "Id",
        key: "Key",
        displayName: "DisplayName",
        fullyQualifiedName: "FullyQualifiedName",
        folderType: "FolderType",
      },
    },
    { additionalProperties: s.json() },
  );
