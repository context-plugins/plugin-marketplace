import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsMoveRequest = {
  workspace: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsMoveRequestSchema: Schema<DocsMoveRequest> = s.object<DocsMoveRequest>(
  {
    workspace: s.int(),
  },
  { additionalProperties: s.json() },
);
