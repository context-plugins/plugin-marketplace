import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  endpointSimplescaleConfigSchema,
  type EndpointSimplescaleConfig,
} from "../endpoint-simplescale-config.js";

/** The simple scaling configuration of the endpoint. */
export type SimpleScale = EndpointSimplescaleConfig;

export const simpleScaleSchema: Schema<SimpleScale> = s.of<SimpleScale>(
  s.union([s.lazy(() => endpointSimplescaleConfigSchema)]),
);
