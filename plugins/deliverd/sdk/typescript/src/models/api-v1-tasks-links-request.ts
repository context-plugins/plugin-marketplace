import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kind12Schema, type Kind12 } from "./kind12.js";

export type ApiV1TasksLinksRequest = {
  targetTaskId: string;
  kind: Kind12;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1TasksLinksRequestSchema: Schema<ApiV1TasksLinksRequest> = s.object<ApiV1TasksLinksRequest>(
  {
    targetTaskId: s.string(),
    kind: kind12Schema,
  },
  { additionalProperties: s.json() },
);
