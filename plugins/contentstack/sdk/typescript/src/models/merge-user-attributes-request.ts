import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for merging two user identity records. */
export type MergeUserAttributesRequest = {
  /**
   * The UID of the source user whose attributes will be merged into the target. Typically the
   * anonymous user UID.
   */
  sourceUserUid: string;
  /**
   * The UID of the target user who will receive the merged attributes. Typically the authenticated
   * user UID.
   */
  targetUserUid: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mergeUserAttributesRequestSchema: Schema<MergeUserAttributesRequest> =
  s.object<MergeUserAttributesRequest>(
    {
      sourceUserUid: s.string(),
      targetUserUid: s.string(),
    },
    { additionalProperties: s.json() },
  );
