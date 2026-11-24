import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billingMode1AwsDirectConnectOperationsApiSchema,
  type BillingMode1AwsDirectConnectOperationsApi,
} from "./billing-mode1-aws-direct-connect-operations-api.js";

export type UpdateConnectionsBillingModeRequest = {
  /** The IDs of the connections to update. You can specify from 1 to 200 connections. */
  connectionIds: string[];
  /**
   * The billing mode to apply to the specified connections. The valid values are PayAsYouGo,
   * FlatRateTier1, FlatRateTier2, FlatRateTier3, FlatRateTier4, and FlatRateTier5.
   */
  billingMode: BillingMode1AwsDirectConnectOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateConnectionsBillingModeRequestSchema: Schema<UpdateConnectionsBillingModeRequest> =
  s.object<UpdateConnectionsBillingModeRequest>(
    {
      connectionIds: s.array(s.string()),
      billingMode: billingMode1AwsDirectConnectOperationsApiSchema,
    },
    { additionalProperties: s.json() },
  );
