import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseDisplayConfigSchema, type ResponseDisplayConfig } from "../response-display-config.js";

/** Optional mapping used to format propagated results in live chat responses. */
export type ResponseDisplay = ResponseDisplayConfig;

export const responseDisplaySchema: Schema<ResponseDisplay> = s.of<ResponseDisplay>(
  s.union([s.lazy(() => responseDisplayConfigSchema)]),
);
