import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EdgeDbApiResponse = {
  /** Response message of the request */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const edgeDbApiResponseSchema: Schema<EdgeDbApiResponse> = s.object<EdgeDbApiResponse>(
  {
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
