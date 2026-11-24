import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1UpdateErrorSchema,
  type GoogleCloudApigeeV1UpdateError,
} from "./google-cloud-apigee-v1-update-error.js";

/** The status of a specific resource revision. */
export type GoogleCloudApigeeV1RevisionStatus = {
  /** The revision of the resource. */
  revisionId?: string;
  /**
   * The json content of the resource revision. Large specs should be sent individually via the spec
   * field to avoid hitting request size limits.
   */
  jsonSpec?: string;
  /** The number of replicas that have successfully loaded this revision. */
  replicas?: number;
  /** Errors reported when attempting to load this revision. */
  errors?: GoogleCloudApigeeV1UpdateError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RevisionStatusSchema: Schema<GoogleCloudApigeeV1RevisionStatus> =
  s.object<GoogleCloudApigeeV1RevisionStatus>(
    {
      revisionId: s.optional(s.string()),
      jsonSpec: s.optional(s.string()),
      replicas: s.optional(s.int()),
      errors: s.optional(s.array(s.lazy(() => googleCloudApigeeV1UpdateErrorSchema))),
    },
    { additionalProperties: s.json() },
  );
