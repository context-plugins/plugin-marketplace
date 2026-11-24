import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";

export type DomainInfo = {
  /** The name of the domain. This name is unique within the account. */
  name: string;
  /**
   * The status of the domain: REGISTERED – The domain is properly registered and available. You can
   * use this domain for registering types and creating new workflow executions. DEPRECATED – The
   * domain was deprecated using DeprecateDomain, but is still in use. You should not create new
   * workflow executions in this domain.
   */
  status: Status2;
  /** The description of the domain provided through RegisterDomain. */
  description?: string;
  /** The ARN of the domain. */
  arn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainInfoSchema: Schema<DomainInfo> = s.object<DomainInfo>(
  {
    name: s.string(),
    status: status2Schema,
    description: s.optional(s.string()),
    arn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
