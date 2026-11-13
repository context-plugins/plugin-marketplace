import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FileAttachment = string | number | Record<string, unknown>[] | Record<string, unknown>;

export const fileAttachmentSchema: Schema<FileAttachment> = s.of<FileAttachment>(
  s.union([
    s.string(),
    s.int(),
    s.array(s.record(s.string(), s.unknown())),
    s.record(s.string(), s.unknown()),
  ]),
);
