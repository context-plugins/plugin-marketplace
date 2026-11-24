import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request message for AcknowledgeUserDataCollection RPC. */
export type GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest = {
  /**
   * Required. An acknowledgement that the caller of this method understands the terms of user data
   * collection. This field must contain the exact value: "I acknowledge that I have the necessary
   * privacy disclosures and rights from my end users for the collection and processing of their
   * data, including the association of such data with the visitation information Google Analytics
   * collects from my site and/or app property."
   */
  acknowledgement?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestSchema: Schema<GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest> =
  s.object<GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest>(
    {
      acknowledgement: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
