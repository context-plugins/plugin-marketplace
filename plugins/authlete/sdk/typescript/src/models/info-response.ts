import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceTokenCacheSchema, type ServiceTokenCache } from "./service-token-cache.js";

export type InfoResponse = {
  /** The server version. */
  version: string;
  /** the features that the server supports. */
  features: string[];
  /** Server configuration properties as key-value pairs. */
  configuration?: Record<string, string>;
  /** Cache statistics for service tokens. */
  serviceTokenCache?: ServiceTokenCache;
};

export const infoResponseSchema: Schema<InfoResponse> = s.object<InfoResponse>({
  version: s.string(),
  features: s.array(s.string()),
  configuration: s.optional(s.record(s.string(), s.string())),
  serviceTokenCache: s.optional(s.lazy(() => serviceTokenCacheSchema)),
});
