import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolHttpEndpointSchema, type ToolHttpEndpoint } from "../tool-http-endpoint.js";

/** The configuration for an HTTP API call. */
export type Endpoint = ToolHttpEndpoint;

export const endpointSchema: Schema<Endpoint> = s.of<Endpoint>(
  s.union([s.lazy(() => toolHttpEndpointSchema)]),
);
