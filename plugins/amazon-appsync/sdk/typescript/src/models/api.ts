import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventConfigSchema, type EventConfig } from "./event-config.js";

export type Api = {
  /** The Api ID. */
  apiId?: string;
  /** The name of the Api. */
  name?: string;
  /** The owner contact information for the Api */
  ownerContact?: string;
  tags?: Record<string, string>;
  /** The DNS records for the API. This will include an HTTP and a real-time endpoint. */
  dns?: Record<string, string>;
  /** The Amazon Resource Name (ARN) for the Api. */
  apiArn?: string;
  /** The date and time that the Api was created. */
  created?: Date;
  /** A flag indicating whether to use X-Ray tracing for this Api. */
  xrayEnabled?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the WAF web access control list (web ACL) associated with
   * this Api, if one exists.
   */
  wafWebAclArn?: string;
  eventConfig?: EventConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiSchema: Schema<Api> = s.object<Api>(
  {
    apiId: s.optional(s.string()),
    name: s.optional(s.string()),
    ownerContact: s.optional(s.string()),
    tags: s.optional(s.record(s.string(), s.string())),
    dns: s.optional(s.record(s.string(), s.string())),
    apiArn: s.optional(s.string()),
    created: s.optional(s.dateTime()),
    xrayEnabled: s.optional(s.boolean()),
    wafWebAclArn: s.optional(s.string()),
    eventConfig: s.optional(s.lazy(() => eventConfigSchema)),
  },
  { additionalProperties: s.json() },
);
