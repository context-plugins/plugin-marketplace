import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContainerResponse = {
  /** The container ID. */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const containerResponseSchema: Schema<ContainerResponse> = s.object<ContainerResponse>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
