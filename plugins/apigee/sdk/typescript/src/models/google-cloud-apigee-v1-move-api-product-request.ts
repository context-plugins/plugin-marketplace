import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Moves API product to a different space. */
export type GoogleCloudApigeeV1MoveApiProductRequest = {
  /**
   * Optional. Resource ID of the space to move the API product to. If unspecified, the API product
   * will be moved to the organization level.
   */
  space?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1MoveApiProductRequestSchema: Schema<GoogleCloudApigeeV1MoveApiProductRequest> =
  s.object<GoogleCloudApigeeV1MoveApiProductRequest>(
    {
      space: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
