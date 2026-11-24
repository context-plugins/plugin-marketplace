import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { optionsSchema, type Options } from "./options.js";
import { specDataSchema, type SpecData } from "./unions/spec-data.js";

export type VersionsImportRequest = {
  options?: Options;
  specData?: SpecData;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const versionsImportRequestSchema: Schema<VersionsImportRequest> = s.object<VersionsImportRequest>(
  {
    options: s.optional(s.lazy(() => optionsSchema)),
    specData: s.optional(s.lazy(() => specDataSchema)),
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
