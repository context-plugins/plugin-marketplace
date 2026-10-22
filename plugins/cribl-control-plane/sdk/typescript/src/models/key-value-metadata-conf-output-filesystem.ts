import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KeyValueMetadataConfOutputFilesystem = {
  /** Key */
  key: string;
  /** Value */
  value: string;
};

export const keyValueMetadataConfOutputFilesystemSchema: Schema<KeyValueMetadataConfOutputFilesystem> =
  s.object<KeyValueMetadataConfOutputFilesystem>({
    key: s.string(),
    value: s.string(),
  });
