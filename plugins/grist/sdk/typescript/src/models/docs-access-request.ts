import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { docAccessWriteSchema, type DocAccessWrite } from "./doc-access-write.js";

export type DocsAccessRequest = {
  delta: DocAccessWrite;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsAccessRequestSchema: Schema<DocsAccessRequest> = s.object<DocsAccessRequest>(
  {
    delta: docAccessWriteSchema,
  },
  { additionalProperties: s.json() },
);
