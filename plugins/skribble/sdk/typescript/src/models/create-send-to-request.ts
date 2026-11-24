import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateSendToRequest = {
  /** Title of the document. */
  title: string;
  /** Base64 Encoded Document. */
  content: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSendToRequestSchema: Schema<CreateSendToRequest> = s.object<CreateSendToRequest>(
  {
    title: s.string(),
    content: s.string(),
  },
  { additionalProperties: s.json() },
);
