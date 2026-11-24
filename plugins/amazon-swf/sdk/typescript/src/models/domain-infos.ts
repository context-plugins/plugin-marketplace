import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainInfoSchema, type DomainInfo } from "./domain-info.js";

export type DomainInfos = {
  /** A list of DomainInfo structures. */
  domainInfos: DomainInfo[];
  /**
   * If a NextPageToken was returned by a previous call, there are more results available. To
   * retrieve the next page of results, make the call again using the returned token in
   * nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines
   * how many results can be returned in a single call.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainInfosSchema: Schema<DomainInfos> = s.object<DomainInfos>(
  {
    domainInfos: s.array(s.lazy(() => domainInfoSchema)),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
