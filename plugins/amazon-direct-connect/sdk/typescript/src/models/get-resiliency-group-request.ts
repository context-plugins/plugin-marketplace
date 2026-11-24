import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetResiliencyGroupRequest = {
  /** The ID of the resiliency group. */
  resiliencyGroupId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getResiliencyGroupRequestSchema: Schema<GetResiliencyGroupRequest> =
  s.object<GetResiliencyGroupRequest>(
    {
      resiliencyGroupId: s.string(),
    },
    { additionalProperties: s.json() },
  );
