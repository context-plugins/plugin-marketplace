import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainConfigurationSchema, type DomainConfiguration } from "./domain-configuration.js";
import { domainInfoSchema, type DomainInfo } from "./domain-info.js";

export type DomainDetail = {
  domainInfo: DomainInfo;
  configuration: DomainConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainDetailSchema: Schema<DomainDetail> = s.object<DomainDetail>(
  {
    domainInfo: domainInfoSchema,
    configuration: domainConfigurationSchema,
  },
  { additionalProperties: s.json() },
);
