import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HumanLoopQuotaExceededException = {
  /** The resource type. */
  resourceType?: string;
  /** The quota code. */
  quotaCode?: string;
  /** The service code. */
  serviceCode?: string;
  message?: string;
  code?: string;
  /** A universally unique identifier (UUID) for the request. */
  logref?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const humanLoopQuotaExceededExceptionSchema: Schema<HumanLoopQuotaExceededException> =
  s.object<HumanLoopQuotaExceededException>(
    {
      resourceType: s.optional(s.string()),
      quotaCode: s.optional(s.string()),
      serviceCode: s.optional(s.string()),
      message: s.optional(s.string()),
      code: s.optional(s.string()),
      logref: s.optional(s.string()),
      _keysMap: {
        resourceType: "ResourceType",
        quotaCode: "QuotaCode",
        serviceCode: "ServiceCode",
        message: "Message",
        code: "Code",
        logref: "Logref",
      },
    },
    { additionalProperties: s.json() },
  );
