import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { riskCheckRequestSchema, type RiskCheckRequest } from "./risk-check-request.js";

export type ApiV2NumbersRiskChecksResponse1 = {
  /** Created risk check task details */
  riskCheckRequest: RiskCheckRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersRiskChecksResponse1Schema: Schema<ApiV2NumbersRiskChecksResponse1> =
  s.object<ApiV2NumbersRiskChecksResponse1>(
    {
      riskCheckRequest: riskCheckRequestSchema,
      _keysMap: {
        riskCheckRequest: "risk_check_request",
      },
    },
    { additionalProperties: s.json() },
  );
