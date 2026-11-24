import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { monitorTypeSchema, type MonitorType } from "./monitor-type.js";
import { requestHeaderSchema, type RequestHeader } from "./request-header.js";

export type MonitorCreate = {
  url: string;
  monitorType: MonitorType;
  pronounceableName?: string;
  /** Seconds between checks. */
  checkFrequency?: number;
  requestHeaders?: RequestHeader[];
  requestBody?: string;
  requestTimeout?: number;
  recoveryPeriod?: number;
  confirmationPeriod?: number;
  regions?: string[];
  email?: boolean;
  sms?: boolean;
  call?: boolean;
  push?: boolean;
  teamWait?: number;
  paused?: boolean;
  followRedirects?: boolean;
  verifySsl?: boolean;
  sslExpiration?: number;
  domainExpiration?: number;
  expectedStatusCodes?: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const monitorCreateProperties: s.Shape<MonitorCreate> = {
  url: s.string(),
  monitorType: monitorTypeSchema,
  pronounceableName: s.optional(s.string()),
  checkFrequency: s.optional(s.int()),
  requestHeaders: s.optional(s.array(s.lazy(() => requestHeaderSchema))),
  requestBody: s.optional(s.string()),
  requestTimeout: s.optional(s.int()),
  recoveryPeriod: s.optional(s.int()),
  confirmationPeriod: s.optional(s.int()),
  regions: s.optional(s.array(s.string())),
  email: s.optional(s.boolean()),
  sms: s.optional(s.boolean()),
  call: s.optional(s.boolean()),
  push: s.optional(s.boolean()),
  teamWait: s.optional(s.int()),
  paused: s.optional(s.boolean()),
  followRedirects: s.optional(s.boolean()),
  verifySsl: s.optional(s.boolean()),
  sslExpiration: s.optional(s.int()),
  domainExpiration: s.optional(s.int()),
  expectedStatusCodes: s.optional(s.array(s.int())),
  _keysMap: {
    monitorType: "monitor_type",
    pronounceableName: "pronounceable_name",
    checkFrequency: "check_frequency",
    requestHeaders: "request_headers",
    requestBody: "request_body",
    requestTimeout: "request_timeout",
    recoveryPeriod: "recovery_period",
    confirmationPeriod: "confirmation_period",
    teamWait: "team_wait",
    followRedirects: "follow_redirects",
    verifySsl: "verify_ssl",
    sslExpiration: "ssl_expiration",
    domainExpiration: "domain_expiration",
    expectedStatusCodes: "expected_status_codes",
  },
};

export const monitorCreateInternalSchema: Schema<MonitorCreate> = s.object<MonitorCreate>(
  monitorCreateProperties,
  { additionalProperties: s.json() },
);

export const monitorCreateSchema: Schema<MonitorCreate> = s.lazySchema(() =>
  s.object<MonitorCreate>(
    {
      ...monitorCreateProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
