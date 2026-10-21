import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Optional API key for authentication */
export type ApiKey = string;

export const apiKeySchema: Schema<ApiKey> = s.of<ApiKey>(s.union([s.string()]));
