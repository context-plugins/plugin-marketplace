import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateSeatAssignmentRequest = {
  userExternalId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSeatAssignmentRequestSchema: Schema<UpdateSeatAssignmentRequest> =
  s.object<UpdateSeatAssignmentRequest>(
    {
      userExternalId: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
