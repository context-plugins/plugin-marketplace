import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approvalSchema, type Approval } from "./approval.js";

export type ApiV1ApprovalsResponse1 = {
  approvals: Approval[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ApprovalsResponse1Schema: Schema<ApiV1ApprovalsResponse1> =
  s.object<ApiV1ApprovalsResponse1>(
    {
      approvals: s.array(s.lazy(() => approvalSchema)),
      nextCursor: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
