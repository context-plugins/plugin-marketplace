import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Moves a Shared Flow to a different space. */
export type GoogleCloudApigeeV1MoveSharedFlowRequest = {
  /**
   * Optional. Resource ID of the space to move the shared flow to. If unspecified, the shared flow
   * will be moved to the organization level.
   */
  space?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1MoveSharedFlowRequestSchema: Schema<GoogleCloudApigeeV1MoveSharedFlowRequest> =
  s.object<GoogleCloudApigeeV1MoveSharedFlowRequest>(
    {
      space: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
