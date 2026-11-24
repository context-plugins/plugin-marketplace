import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1SourceMetadata2Schema,
  type GoogleCloudApihubV1SourceMetadata2,
} from "./google-cloud-apihub-v1-source-metadata2.js";
import { sourceType1Schema, type SourceType1 } from "./source-type1.js";
import { styleSchema, type Style } from "./style.js";

/** Respresents an API Observation observed in one of the sources. */
export type GoogleCloudApihubV1DiscoveredApiObservation = {
  /** Optional. Last event detected time stamp */
  lastEventDetectedTime?: string;
  /** Output only. The number of unknown API Operations. */
  unknownOperationsCount?: string;
  /** Optional. The hostname of requests processed for this Observation. */
  hostname?: string;
  /** Optional. The location of the observation source. */
  sourceLocations?: string[];
  /**
   * Optional. The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This
   * field can include port information. Examples: `"192.168.1.1"`, `"10.0.0.1:80"`,
   * `"FE80::0202:B3FF:FE1E:8329"`.
   */
  serverIps?: string[];
  /** Optional. Style of ApiObservation */
  style?: Style;
  /**
   * Optional. For an observation pushed from a Google Cloud resource, this would be the Google
   * Cloud project id.
   */
  origin?: string;
  /** Optional. The type of the source from which the observation was collected. */
  sourceTypes?: SourceType1[];
  /** Optional. The number of observed API Operations. */
  apiOperationCount?: string;
  /**
   * Identifier. The name of the discovered API Observation. Format:
   * `projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}`
   */
  name?: string;
  /** Output only. Create time stamp of the observation in API Hub. */
  createTime?: string;
  /** Output only. The metadata of the source from which the observation was collected. */
  sourceMetadata?: GoogleCloudApihubV1SourceMetadata2;
  /** Output only. Update time stamp of the observation in API Hub. */
  updateTime?: string;
  /** Output only. The number of known API Operations. */
  knownOperationsCount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1DiscoveredApiObservationSchema: Schema<GoogleCloudApihubV1DiscoveredApiObservation> =
  s.object<GoogleCloudApihubV1DiscoveredApiObservation>(
    {
      lastEventDetectedTime: s.optional(s.string()),
      unknownOperationsCount: s.optional(s.string()),
      hostname: s.optional(s.string()),
      sourceLocations: s.optional(s.array(s.string())),
      serverIps: s.optional(s.array(s.string())),
      style: s.optional(s.lazy(() => styleSchema)),
      origin: s.optional(s.string()),
      sourceTypes: s.optional(s.array(s.lazy(() => sourceType1Schema))),
      apiOperationCount: s.optional(s.string()),
      name: s.optional(s.string()),
      createTime: s.optional(s.string()),
      sourceMetadata: s.optional(s.lazy(() => googleCloudApihubV1SourceMetadata2Schema)),
      updateTime: s.optional(s.string()),
      knownOperationsCount: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
