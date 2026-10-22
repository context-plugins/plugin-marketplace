import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Version = {
  /** Hexadecimal version ID; length is a positive multiple of 32 (typically 32 or 64). */
  versionId?: string;
  version?: string;
  format?: string | null;
  size?: number;
  time?: Date;
  restorable?: boolean;
};

export const versionSchema: Schema<Version> = s.object<Version>({
  versionId: s.optional(s.string()),
  version: s.optional(s.string()),
  format: s.optionalNullable(s.string()),
  size: s.optional(s.int()),
  time: s.optional(s.dateTime()),
  restorable: s.optional(s.boolean()),
  _keysMap: {
    versionId: "version_id",
  },
});
