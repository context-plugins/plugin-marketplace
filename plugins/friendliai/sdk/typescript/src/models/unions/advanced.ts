import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { endpointAdvancedConfigSchema, type EndpointAdvancedConfig } from "../endpoint-advanced-config.js";

/** The advanced configuration of the endpoint. */
export type Advanced = EndpointAdvancedConfig;

export const advancedSchema: Schema<Advanced> = s.of<Advanced>(
  s.union([s.lazy(() => endpointAdvancedConfigSchema)]),
);
