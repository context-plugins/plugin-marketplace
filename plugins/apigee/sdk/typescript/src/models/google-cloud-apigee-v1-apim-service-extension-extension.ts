import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { supportedEventSchema, type SupportedEvent } from "./supported-event.js";

/** Extension configuration for Apigee extension processor service extension. */
export type GoogleCloudApigeeV1ApimServiceExtensionExtension = {
  /** Optional. Whether this request should fail open. */
  failOpen?: boolean;
  /**
   * Optional. Match Condition for CEL expression. Refer to
   * https://cloud.google.com/service-extensions/docs/cel-matcher-language-reference for more
   * details.
   */
  matchCondition?: string;
  /**
   * Required. One of the hostnames of Apigee EnvGroup where the proxy is deployed. This hostname
   * (i.e FDQN) will be used to route traffic from the specified forwarding rule to the environment
   * in Apigee X instance where the proxy is deployed for handling extension traffic. Format:
   * ^([a-zA-Z0-9. _-])+$
   */
  hostname?: string;
  /**
   * Optional. Supported events for the Service Extension. If not specified, all events are
   * supported.
   */
  supportedEvents?: SupportedEvent[];
  /**
   * Required. Name of the `LbTrafficExtension` resource. The name must conform with RFC-1034, is
   * restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63
   * characters. Additionally, the first character must be a letter and the last a letter or a
   * number.
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApimServiceExtensionExtensionSchema: Schema<GoogleCloudApigeeV1ApimServiceExtensionExtension> =
  s.object<GoogleCloudApigeeV1ApimServiceExtensionExtension>(
    {
      failOpen: s.optional(s.boolean()),
      matchCondition: s.optional(s.string()),
      hostname: s.optional(s.string()),
      supportedEvents: s.optional(s.array(s.lazy(() => supportedEventSchema))),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
