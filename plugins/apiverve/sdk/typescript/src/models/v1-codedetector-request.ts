import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1CodedetectorRequest = {
  /** The code snippet you want to detect the programming language of */
  code: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CodedetectorRequestSchema: Schema<V1CodedetectorRequest> = s.object<V1CodedetectorRequest>(
  {
    code: s.string(),
  },
  { additionalProperties: s.json() },
);
