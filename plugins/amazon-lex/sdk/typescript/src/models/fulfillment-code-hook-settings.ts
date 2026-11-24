import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fulfillmentUpdatesSpecificationSchema,
  type FulfillmentUpdatesSpecification,
} from "./fulfillment-updates-specification.js";
import {
  postFulfillmentStatusSpecificationSchema,
  type PostFulfillmentStatusSpecification,
} from "./post-fulfillment-status-specification.js";

export type FulfillmentCodeHookSettings = {
  /** Indicates whether a Lambda function should be invoked to fulfill a specific intent. */
  enabled: boolean;
  postFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;
  fulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;
  /**
   * Determines whether the fulfillment code hook is used. When active is false, the code hook
   * doesn't run.
   */
  active?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fulfillmentCodeHookSettingsSchema: Schema<FulfillmentCodeHookSettings> =
  s.object<FulfillmentCodeHookSettings>(
    {
      enabled: s.boolean(),
      postFulfillmentStatusSpecification: s.optional(s.lazy(() => postFulfillmentStatusSpecificationSchema)),
      fulfillmentUpdatesSpecification: s.optional(s.lazy(() => fulfillmentUpdatesSpecificationSchema)),
      active: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
