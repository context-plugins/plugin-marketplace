import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { integrationClientSchema, type IntegrationClient } from "../integration-client.js";

/**
 * Defines the client where the session for this transaction is going to be used. Please refer to
 * the connections documentation for more guidance.
 */
export type IntegrationClient11 = IntegrationClient;

export const integrationClient11Schema: Schema<IntegrationClient11> = s.of<IntegrationClient11>(
  s.union([s.lazy(() => integrationClientSchema)]),
);
