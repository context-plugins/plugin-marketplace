import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response message for a 'FetchStaticIps' response. */
export type FetchStaticIpsResponse = {
  /** list of static ips by account */
  staticIps?: string[];
  /**
   * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fetchStaticIpsResponseSchema: Schema<FetchStaticIpsResponse> = s.object<FetchStaticIpsResponse>(
  {
    staticIps: s.optional(s.array(s.string())),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
