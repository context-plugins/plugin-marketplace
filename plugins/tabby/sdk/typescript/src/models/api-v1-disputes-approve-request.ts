import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1DisputesApproveRequest = {
  /** Array of dispute ids. Only 20 disputes can be approved within a single request. */
  disputeIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DisputesApproveRequestSchema: Schema<ApiV1DisputesApproveRequest> =
  s.object<ApiV1DisputesApproveRequest>(
    {
      disputeIds: s.array(s.string()),
      _keysMap: {
        disputeIds: "dispute_ids",
      },
    },
    { additionalProperties: s.json() },
  );
