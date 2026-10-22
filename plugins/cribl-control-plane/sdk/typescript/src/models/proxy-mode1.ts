import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Proxy mode settings for Datadog Agent requests. */
export type ProxyMode1 = {
  /**
   * Forward key validation requests from the Datadog Agent to the Datadog API. If disabled, Stream
   * handles key validation requests locally by always responding that the key is valid.
   */
  enabled: boolean;
  /**
   * Whether to reject certificates that cannot be verified against a valid CA (such as self-signed
   * certificates)
   */
  rejectUnauthorized?: boolean;
};

export const proxyMode1Schema: Schema<ProxyMode1> = s.object<ProxyMode1>({
  enabled: s.boolean(),
  rejectUnauthorized: s.optional(s.boolean()),
});
