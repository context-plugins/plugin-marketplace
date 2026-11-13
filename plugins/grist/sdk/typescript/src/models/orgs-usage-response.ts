import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentsSchema, type Attachments } from "./attachments.js";
import {
  countsByDataLimitStatusSchema,
  type CountsByDataLimitStatus,
} from "./counts-by-data-limit-status.js";

export type OrgsUsageResponse = {
  /** Count of documents grouped by data limit status */
  countsByDataLimitStatus?: CountsByDataLimitStatus;
  attachments?: Attachments;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orgsUsageResponseSchema: Schema<OrgsUsageResponse> = s.object<OrgsUsageResponse>(
  {
    countsByDataLimitStatus: s.optional(s.lazy(() => countsByDataLimitStatusSchema)),
    attachments: s.optional(s.lazy(() => attachmentsSchema)),
  },
  { additionalProperties: s.json() },
);
