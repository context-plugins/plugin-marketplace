import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { flowCheckSchema, type FlowCheck } from "./flow-check.js";
import { modeSchema, type Mode } from "./mode.js";
import { testPayloadSchema, type TestPayload } from "./test-payload.js";

export type TestSubscriptionResponse = {
  subscriptionId: string;
  subscriptionName?: string;
  url: string;
  mode: Mode;
  flowCheck?: FlowCheck;
  testPayload?: TestPayload;
  isSuccess: boolean;
  timestamp: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const testSubscriptionResponseProperties: s.Shape<TestSubscriptionResponse> = {
  subscriptionId: s.string(),
  subscriptionName: s.optional(s.string()),
  url: s.string(),
  mode: modeSchema,
  flowCheck: s.optional(s.lazy(() => flowCheckSchema)),
  testPayload: s.optional(s.lazy(() => testPayloadSchema)),
  isSuccess: s.boolean(),
  timestamp: s.dateTime(),
};

export const testSubscriptionResponseInternalSchema: Schema<TestSubscriptionResponse> =
  s.object<TestSubscriptionResponse>(testSubscriptionResponseProperties, { additionalProperties: s.json() });

export const testSubscriptionResponseSchema: Schema<TestSubscriptionResponse> = s.lazySchema(() =>
  s.object<TestSubscriptionResponse>(
    {
      ...testSubscriptionResponseProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
