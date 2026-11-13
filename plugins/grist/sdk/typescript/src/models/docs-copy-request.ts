import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsCopyRequest = {
  workspaceId: number;
  documentName: string;
  /** Remove all data and history but keep the structure to use the document as a template */
  asTemplate?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsCopyRequestSchema: Schema<DocsCopyRequest> = s.object<DocsCopyRequest>(
  {
    workspaceId: s.int(),
    documentName: s.string(),
    asTemplate: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
