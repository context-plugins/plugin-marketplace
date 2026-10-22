import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { integrationClientSchema, type IntegrationClient } from "../integration-client.js";

/** List of supported integration clients. Defaults to redirect for most redirect connectors. */
export type SupportedIntegrationClients = IntegrationClient[];

export const supportedIntegrationClientsSchema: Schema<SupportedIntegrationClients> =
  s.of<SupportedIntegrationClients>(s.union([s.array(s.lazy(() => integrationClientSchema))]));
