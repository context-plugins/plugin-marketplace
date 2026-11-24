import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1EntityMetadata1Schema,
  type GoogleCloudApigeeV1EntityMetadata1,
} from "./google-cloud-apigee-v1-entity-metadata1.js";

/** The metadata describing a shared flow */
export type GoogleCloudApigeeV1SharedFlow = {
  /**
   * Optional. The ID of the space associated with this shared flow. Any IAM policies applied to the
   * space will control access to this shared flow. To learn how Spaces can be used to manage
   * resources, read the [Apigee Spaces
   * Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
   */
  space?: string;
  /** Metadata describing the shared flow. */
  metaData?: GoogleCloudApigeeV1EntityMetadata1;
  /** The ID of the shared flow. */
  name?: string;
  /** A list of revisions of this shared flow. */
  revision?: string[];
  /** The id of the most recently created revision for this shared flow. */
  latestRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SharedFlowSchema: Schema<GoogleCloudApigeeV1SharedFlow> =
  s.object<GoogleCloudApigeeV1SharedFlow>(
    {
      space: s.optional(s.string()),
      metaData: s.optional(s.lazy(() => googleCloudApigeeV1EntityMetadata1Schema)),
      name: s.optional(s.string()),
      revision: s.optional(s.array(s.string())),
      latestRevisionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
