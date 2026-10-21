import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Simple scaling options. */
export type EndpointSimplescaleConfig = {
  replicas: number;
};

export const endpointSimplescaleConfigSchema: Schema<EndpointSimplescaleConfig> =
  s.object<EndpointSimplescaleConfig>({
    replicas: s.int(),
  });
