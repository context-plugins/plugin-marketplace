import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. The details of the Application Integration endpoint to be triggered for curation. */
export type GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1 = {
  /**
   * Required. The endpoint URI should be a valid REST URI for triggering an Application
   * Integration. Format:
   * `https://integrations.googleapis.com/v1/{name=projects/*&#47;locations/*&#47;integrations/*}:execute`
   * or
   * `https://{location}-integrations.googleapis.com/v1/{name=projects/*&#47;locations/*&#47;integrations/*}:execute`
   */
  uri?: string;
  /** Required. The API trigger ID of the Application Integration workflow. */
  triggerId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApplicationIntegrationEndpointDetails1Schema: Schema<GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1> =
  s.object<GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1>(
    {
      uri: s.optional(s.string()),
      triggerId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
