import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BodyImportProjectCsvApiV1ProjectsProjectIdImportPost = {
  file: Uint8Array;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bodyImportProjectCsvApiV1ProjectsProjectIdImportPostSchema: Schema<BodyImportProjectCsvApiV1ProjectsProjectIdImportPost> =
  s.object<BodyImportProjectCsvApiV1ProjectsProjectIdImportPost>(
    {
      file: s.bytes(),
    },
    { additionalProperties: s.json() },
  );
