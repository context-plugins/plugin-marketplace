import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fulfillmentStartResponseSpecificationSchema,
  type FulfillmentStartResponseSpecification,
} from "./fulfillment-start-response-specification.js";
import {
  fulfillmentUpdateResponseSpecificationSchema,
  type FulfillmentUpdateResponseSpecification,
} from "./fulfillment-update-response-specification.js";

export type FulfillmentUpdatesSpecification = {
  /**
   * Determines whether fulfillment updates are sent to the user. When this field is true, updates
   * are sent. If the active field is set to true, the startResponse, updateResponse, and
   * timeoutInSeconds fields are required.
   */
  active: boolean;
  startResponse?: FulfillmentStartResponseSpecification;
  updateResponse?: FulfillmentUpdateResponseSpecification;
  /** The length of time that the fulfillment Lambda function should run before it times out. */
  timeoutInSeconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fulfillmentUpdatesSpecificationSchema: Schema<FulfillmentUpdatesSpecification> =
  s.object<FulfillmentUpdatesSpecification>(
    {
      active: s.boolean(),
      startResponse: s.optional(s.lazy(() => fulfillmentStartResponseSpecificationSchema)),
      updateResponse: s.optional(s.lazy(() => fulfillmentUpdateResponseSpecificationSchema)),
      timeoutInSeconds: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
