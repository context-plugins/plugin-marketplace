import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocRequest = {
  /** Document id that will be permanently deleted. */
  docId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docRequestSchema: Schema<DocRequest> = s.object<DocRequest>(
  {
    docId: s.string(),
  },
  { additionalProperties: s.json() },
);
