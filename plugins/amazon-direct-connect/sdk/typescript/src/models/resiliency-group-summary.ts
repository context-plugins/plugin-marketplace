import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resiliencyGroupTypeSchema, type ResiliencyGroupType } from "./resiliency-group-type.js";
import { state1Schema, type State1 } from "./state1.js";

export type ResiliencyGroupSummary = {
  /** The ID of the resiliency group. */
  resiliencyGroupId?: string;
  /** The Amazon Resource Name (ARN) of the resiliency group. */
  resiliencyGroupArn?: string;
  /** The name of the resiliency group. */
  resiliencyGroupName?: string;
  /** The type of the resiliency group. The valid value is Managed. */
  resiliencyGroupType?: ResiliencyGroupType;
  /** The ID of the Amazon Web Services account that owns the resiliency group. */
  ownerAccount?: string;
  /** The state of the resiliency group. */
  state?: State1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resiliencyGroupSummarySchema: Schema<ResiliencyGroupSummary> = s.object<ResiliencyGroupSummary>(
  {
    resiliencyGroupId: s.optional(s.string()),
    resiliencyGroupArn: s.optional(s.string()),
    resiliencyGroupName: s.optional(s.string()),
    resiliencyGroupType: s.optional(s.lazy(() => resiliencyGroupTypeSchema)),
    ownerAccount: s.optional(s.string()),
    state: s.optional(s.lazy(() => state1Schema)),
  },
  { additionalProperties: s.json() },
);
