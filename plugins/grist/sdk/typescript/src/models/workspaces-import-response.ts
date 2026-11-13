import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkspacesImportResponse = {
  /** a unique identifier for the document */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesImportResponseSchema: Schema<WorkspacesImportResponse> =
  s.object<WorkspacesImportResponse>(
    {
      id: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
