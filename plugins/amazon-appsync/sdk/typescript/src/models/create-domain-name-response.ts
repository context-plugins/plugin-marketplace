import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainNameConfigSchema, type DomainNameConfig } from "./domain-name-config.js";

export type CreateDomainNameResponse = {
  domainNameConfig?: DomainNameConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDomainNameResponseSchema: Schema<CreateDomainNameResponse> =
  s.object<CreateDomainNameResponse>(
    {
      domainNameConfig: s.optional(s.lazy(() => domainNameConfigSchema)),
    },
    { additionalProperties: s.json() },
  );
