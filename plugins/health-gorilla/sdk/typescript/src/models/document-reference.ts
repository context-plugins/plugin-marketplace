import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentSchema, type Content } from "./content.js";

export type DocumentReference = {
  resourceType?: string;
  id?: string;
  status?: string;
  type?: Record<string, unknown>;
  subject?: Record<string, unknown>;
  content?: Content[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentReferenceSchema: Schema<DocumentReference> = s.object<DocumentReference>(
  {
    resourceType: s.optional(s.string()),
    id: s.optional(s.string()),
    status: s.optional(s.string()),
    type: s.optional(s.record(s.string(), s.unknown())),
    subject: s.optional(s.record(s.string(), s.unknown())),
    content: s.optional(s.array(s.lazy(() => contentSchema))),
  },
  { additionalProperties: s.json() },
);
