import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainNameConfigSchema, type DomainNameConfig } from "./domain-name-config.js";

export type ListDomainNamesResponse = {
  /** Lists configurations for multiple domain names. */
  domainNameConfigs?: DomainNameConfig[];
  /**
   * An identifier that was returned from the previous call to this operation, which you can use to
   * return the next set of items in the list.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDomainNamesResponseSchema: Schema<ListDomainNamesResponse> =
  s.object<ListDomainNamesResponse>(
    {
      domainNameConfigs: s.optional(s.array(s.lazy(() => domainNameConfigSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
