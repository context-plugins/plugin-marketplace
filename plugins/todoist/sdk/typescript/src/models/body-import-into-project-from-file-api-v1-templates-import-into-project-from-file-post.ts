import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BodyImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost = {
  projectId: string;
  file: Uint8Array;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bodyImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostSchema: Schema<BodyImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost> =
  s.object<BodyImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost>(
    {
      projectId: s.string(),
      file: s.bytes(),
      _keysMap: {
        projectId: "project_id",
      },
    },
    { additionalProperties: s.json() },
  );
