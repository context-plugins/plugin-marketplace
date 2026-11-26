import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { schedule1Schema, type Schedule1 } from "./schedule1.js";
import { schemaSyncMode1Schema, type SchemaSyncMode1 } from "./schema-sync-mode1.js";

export type ExtensionUploadCreate = {
  schedule: Schedule1;
  schemaSyncMode: SchemaSyncMode1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extensionUploadCreateSchema: Schema<ExtensionUploadCreate> = s.object<ExtensionUploadCreate>(
  {
    schedule: schedule1Schema,
    schemaSyncMode: schemaSyncMode1Schema,
  },
  { additionalProperties: s.json() },
);
