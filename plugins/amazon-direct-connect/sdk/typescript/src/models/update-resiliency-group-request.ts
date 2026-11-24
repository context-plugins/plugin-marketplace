import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateResiliencyGroupRequest = {
  /** The ID of the resiliency group. */
  resiliencyGroupId: string;
  /** The new name of the resiliency group. */
  resiliencyGroupName: string;
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   */
  clientToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateResiliencyGroupRequestSchema: Schema<UpdateResiliencyGroupRequest> =
  s.object<UpdateResiliencyGroupRequest>(
    {
      resiliencyGroupId: s.string(),
      resiliencyGroupName: s.string(),
      clientToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
