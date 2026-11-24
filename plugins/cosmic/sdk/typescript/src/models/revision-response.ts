import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { revisionSchema, type Revision } from "./revision.js";

export type RevisionResponse = {
  /** An immutable snapshot of an Object at a point in time. */
  revision: Revision;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const revisionResponseSchema: Schema<RevisionResponse> = s.object<RevisionResponse>(
  {
    revision: revisionSchema,
  },
  { additionalProperties: s.json() },
);
