import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectionStateSchema, type ConnectionState } from "./connection-state.js";
import { state8Schema, type State8 } from "./state8.js";

/**
 * Apigee endpoint attachment. For more information, see [Southbound networking patterns]
 * (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).
 */
export type GoogleCloudApigeeV1EndpointAttachment = {
  /**
   * Format: projects/*&#47;regions/*&#47;serviceAttachments/*
   */
  serviceAttachment?: string;
  /** Required. Location of the endpoint attachment. */
  location?: string;
  /** Output only. State of the endpoint attachment connection to the service attachment. */
  connectionState?: ConnectionState;
  /**
   * Output only. State of the endpoint attachment. Values other than `ACTIVE` mean the resource is
   * not ready to use.
   */
  state?: State8;
  /**
   * Output only. Host that can be used in either the HTTP target endpoint directly or as the host
   * in target server.
   */
  host?: string;
  /**
   * Name of the endpoint attachment. Use the following structure in your request:
   * `organizations/{org}/endpointAttachments/{endpoint_attachment}`
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EndpointAttachmentSchema: Schema<GoogleCloudApigeeV1EndpointAttachment> =
  s.object<GoogleCloudApigeeV1EndpointAttachment>(
    {
      serviceAttachment: s.optional(s.string()),
      location: s.optional(s.string()),
      connectionState: s.optional(s.lazy(() => connectionStateSchema)),
      state: s.optional(s.lazy(() => state8Schema)),
      host: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
