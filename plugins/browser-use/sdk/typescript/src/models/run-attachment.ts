import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";

export type RunAttachment = {
  id: string;
  /** Filename shown to the user, e.g. "data.csv". */
  name: string;
  contentType: string;
  sizeBytes: number;
  /** "pending" | "uploaded". */
  status: Status3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runAttachmentSchema: Schema<RunAttachment> = s.object<RunAttachment>(
  {
    id: s.string(),
    name: s.string(),
    contentType: s.string(),
    sizeBytes: s.int(),
    status: status3Schema,
  },
  { additionalProperties: s.json() },
);
