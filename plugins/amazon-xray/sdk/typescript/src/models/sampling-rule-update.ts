import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplingRateBoostSchema, type SamplingRateBoost } from "./sampling-rate-boost.js";

export type SamplingRuleUpdate = {
  /** The name of the sampling rule. Specify a rule by either name or ARN, but not both. */
  ruleName?: string;
  /** The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. */
  ruleArn?: string;
  /** Matches the ARN of the Amazon Web Services resource on which the service runs. */
  resourceArn?: string;
  /** The priority of the sampling rule. */
  priority?: number;
  /** The percentage of matching requests to instrument, after the reservoir is exhausted. */
  fixedRate?: number;
  /**
   * A fixed number of matching requests to instrument per second, prior to applying the fixed rate.
   * The reservoir is not used directly by services, but applies to all services using the rule
   * collectively.
   */
  reservoirSize?: number;
  /** Matches the hostname from a request URL. */
  host?: string;
  /** Matches the name that the service uses to identify itself in segments. */
  serviceName?: string;
  /** Matches the origin that the service uses to identify its type in segments. */
  serviceType?: string;
  /** Matches the HTTP method of a request. */
  httpMethod?: string;
  /** Matches the path from a request URL. */
  urlPath?: string;
  /** Matches attributes derived from the request. */
  attributes?: Record<string, string>;
  samplingRateBoost?: SamplingRateBoost;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingRuleUpdateSchema: Schema<SamplingRuleUpdate> = s.object<SamplingRuleUpdate>(
  {
    ruleName: s.optional(s.string()),
    ruleArn: s.optional(s.string()),
    resourceArn: s.optional(s.string()),
    priority: s.optional(s.int()),
    fixedRate: s.optional(s.float64()),
    reservoirSize: s.optional(s.int()),
    host: s.optional(s.string()),
    serviceName: s.optional(s.string()),
    serviceType: s.optional(s.string()),
    httpMethod: s.optional(s.string()),
    urlPath: s.optional(s.string()),
    attributes: s.optional(s.record(s.string(), s.string())),
    samplingRateBoost: s.optional(s.lazy(() => samplingRateBoostSchema)),
    _keysMap: {
      ruleName: "RuleName",
      ruleArn: "RuleARN",
      resourceArn: "ResourceARN",
      priority: "Priority",
      fixedRate: "FixedRate",
      reservoirSize: "ReservoirSize",
      host: "Host",
      serviceName: "ServiceName",
      serviceType: "ServiceType",
      httpMethod: "HTTPMethod",
      urlPath: "URLPath",
      attributes: "Attributes",
      samplingRateBoost: "SamplingRateBoost",
    },
  },
  { additionalProperties: s.json() },
);
