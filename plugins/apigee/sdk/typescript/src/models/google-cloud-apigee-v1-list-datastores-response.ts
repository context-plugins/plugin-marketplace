import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DatastoreSchema,
  type GoogleCloudApigeeV1Datastore,
} from "./google-cloud-apigee-v1-datastore.js";

/** The response for ListDatastores */
export type GoogleCloudApigeeV1ListDatastoresResponse = {
  /** A list of datastores */
  datastores?: GoogleCloudApigeeV1Datastore[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListDatastoresResponseSchema: Schema<GoogleCloudApigeeV1ListDatastoresResponse> =
  s.object<GoogleCloudApigeeV1ListDatastoresResponse>(
    {
      datastores: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DatastoreSchema))),
    },
    { additionalProperties: s.json() },
  );
