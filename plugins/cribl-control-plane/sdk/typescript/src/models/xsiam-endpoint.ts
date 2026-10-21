import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type XsiamEndpoint = {
  /** Assign a weight (>0) to each endpoint to indicate its traffic-handling capability */
  weight?: number;
};

export const xsiamEndpointSchema: Schema<XsiamEndpoint> = s.object<XsiamEndpoint>({
  weight: s.optional(s.float64()),
});
