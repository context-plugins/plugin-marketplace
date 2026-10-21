import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { integrationClient1Schema, type IntegrationClient1 } from "./integration-client1.js";
import { sessionDataSchema, type SessionData } from "./unions/session-data.js";

export type UpdateTransactionSessionResponse = {
  /** Session data required to launch a payment provider client SDK */
  sessionData: SessionData;
  /** To be used by the merchant when the client SDK does not provide one at the end of the flow */
  defaultCompletionUrl: string;
  /** The integration clients */
  integrationClient: IntegrationClient1;
};

export const updateTransactionSessionResponseSchema: Schema<UpdateTransactionSessionResponse> =
  s.object<UpdateTransactionSessionResponse>({
    sessionData: sessionDataSchema,
    defaultCompletionUrl: s.string(),
    integrationClient: integrationClient1Schema,
    _keysMap: {
      sessionData: "session_data",
      defaultCompletionUrl: "default_completion_url",
      integrationClient: "integration_client",
    },
  });
