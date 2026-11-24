import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billingMode2AwsDirectConnectOperationsApiSchema,
  type BillingMode2AwsDirectConnectOperationsApi,
} from "./billing-mode2-aws-direct-connect-operations-api.js";
import {
  connectionAwsDirectConnectOperationsApiSchema,
  type ConnectionAwsDirectConnectOperationsApi,
} from "./connection-aws-direct-connect-operations-api.js";

export type UpdateConnectionsBillingModeResponse = {
  /** The billing mode applied to the connections. */
  billingMode?: BillingMode2AwsDirectConnectOperationsApi;
  /** The connections with the updated billing mode. */
  connections?: ConnectionAwsDirectConnectOperationsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateConnectionsBillingModeResponseSchema: Schema<UpdateConnectionsBillingModeResponse> =
  s.object<UpdateConnectionsBillingModeResponse>(
    {
      billingMode: s.optional(s.lazy(() => billingMode2AwsDirectConnectOperationsApiSchema)),
      connections: s.optional(s.array(s.lazy(() => connectionAwsDirectConnectOperationsApiSchema))),
    },
    { additionalProperties: s.json() },
  );
