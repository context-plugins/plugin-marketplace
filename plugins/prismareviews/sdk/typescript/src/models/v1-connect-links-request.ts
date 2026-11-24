import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformId2Schema, type PlatformId2 } from "./platform-id2.js";

export type V1ConnectLinksRequest = {
  /** Only this platform. Without it, the owner chooses among the platforms of your plan. */
  platform?: PlatformId2;
  /**
   * Where to send the owner when they are done, with `connection_id` and `status` added to the
   * query string. Must start with `https://` (or `http://localhost` for development).
   */
  redirectUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1ConnectLinksRequestProperties: s.Shape<V1ConnectLinksRequest> = {
  platform: s.optional(s.lazy(() => platformId2Schema)),
  redirectUrl: s.optional(s.string()),
  _keysMap: {
    redirectUrl: "redirect_url",
  },
};

export const v1ConnectLinksRequestInternalSchema: Schema<V1ConnectLinksRequest> =
  s.object<V1ConnectLinksRequest>(v1ConnectLinksRequestProperties, { additionalProperties: s.json() });

export const v1ConnectLinksRequestSchema: Schema<V1ConnectLinksRequest> = s.lazySchema(() =>
  s.object<V1ConnectLinksRequest>(
    {
      ...v1ConnectLinksRequestProperties,
      redirectUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
