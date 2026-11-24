import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainNameConfigSchema, type DomainNameConfig } from "./domain-name-config.js";

export type GetDomainNameResponse = {
  domainNameConfig?: DomainNameConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getDomainNameResponseSchema: Schema<GetDomainNameResponse> = s.object<GetDomainNameResponse>(
  {
    domainNameConfig: s.optional(s.lazy(() => domainNameConfigSchema)),
  },
  { additionalProperties: s.json() },
);
