import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BodyCreateProjectFromCsvApiV1ProjectsImportPost = {
  /** Name of the new project. */
  name: string;
  /** Workspace ID for the new project. Omit to create a personal project. */
  workspaceId?: string | null;
  file: Uint8Array;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bodyCreateProjectFromCsvApiV1ProjectsImportPostSchema: Schema<BodyCreateProjectFromCsvApiV1ProjectsImportPost> =
  s.object<BodyCreateProjectFromCsvApiV1ProjectsImportPost>(
    {
      name: s.string(),
      workspaceId: s.optionalNullable(s.string()),
      file: s.bytes(),
      _keysMap: {
        workspaceId: "workspace_id",
      },
    },
    { additionalProperties: s.json() },
  );
