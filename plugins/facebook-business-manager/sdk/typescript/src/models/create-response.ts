import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateResponse = {
  /** The ID of the newly created object */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createResponseSchema: Schema<CreateResponse> = s.object<CreateResponse>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
