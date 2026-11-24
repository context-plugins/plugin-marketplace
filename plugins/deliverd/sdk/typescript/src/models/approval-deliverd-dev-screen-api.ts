import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApprovalDeliverdDevScreenApi = {
  id: string;
  url: string;
  status: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const approvalDeliverdDevScreenApiSchema: Schema<ApprovalDeliverdDevScreenApi> =
  s.object<ApprovalDeliverdDevScreenApi>(
    {
      id: s.string(),
      url: s.string(),
      status: s.string(),
    },
    { additionalProperties: s.json() },
  );
