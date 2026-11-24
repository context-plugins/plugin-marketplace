import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { quotaStatus1Schema, type QuotaStatus1 } from "./quota-status1.js";
import { quotaStatus2Schema, type QuotaStatus2 } from "./quota-status2.js";
import { quotaStatus3Schema, type QuotaStatus3 } from "./quota-status3.js";
import { quotaStatus4Schema, type QuotaStatus4 } from "./quota-status4.js";
import { quotaStatus5Schema, type QuotaStatus5 } from "./quota-status5.js";
import { quotaStatus7Schema, type QuotaStatus7 } from "./quota-status7.js";

/** This Google Analytics property's Realtime quota state including this request. */
export type PropertyQuota3 = {
  /**
   * Analytics Properties can use up to 35% of their tokens per project per hour. This amounts to
   * standard Analytics Properties can use up to 14,000 tokens per project per hour, and Analytics
   * 360 Properties can use 140,000 tokens per project per hour. An API request consumes a single
   * number of tokens, and that number is deducted from all of the hourly, daily, and per project
   * hourly quotas.
   */
  tokensPerProjectPerHour?: QuotaStatus7;
  /**
   * Analytics Properties can send up to 120 requests with potentially thresholded dimensions per
   * hour. In a batch request, each report request is individually counted for this quota if the
   * request contains potentially thresholded dimensions.
   */
  potentiallyThresholdedRequestsPerHour?: QuotaStatus1;
  /**
   * Standard Analytics Properties can use up to 200,000 tokens per day; Analytics 360 Properties
   * can use 2,000,000 tokens per day. Most requests consume fewer than 10 tokens.
   */
  tokensPerDay?: QuotaStatus2;
  /**
   * Standard Analytics Properties can send up to 10 concurrent requests; Analytics 360 Properties
   * can use up to 50 concurrent requests.
   */
  concurrentRequests?: QuotaStatus3;
  /**
   * Standard Analytics Properties and cloud project pairs can have up to 10 server errors per hour;
   * Analytics 360 Properties and cloud project pairs can have up to 50 server errors per hour.
   */
  serverErrorsPerProjectPerHour?: QuotaStatus4;
  /**
   * Standard Analytics Properties can use up to 40,000 tokens per hour; Analytics 360 Properties
   * can use 400,000 tokens per hour. An API request consumes a single number of tokens, and that
   * number is deducted from all of the hourly, daily, and per project hourly quotas.
   */
  tokensPerHour?: QuotaStatus5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const propertyQuota3Schema: Schema<PropertyQuota3> = s.object<PropertyQuota3>(
  {
    tokensPerProjectPerHour: s.optional(s.lazy(() => quotaStatus7Schema)),
    potentiallyThresholdedRequestsPerHour: s.optional(s.lazy(() => quotaStatus1Schema)),
    tokensPerDay: s.optional(s.lazy(() => quotaStatus2Schema)),
    concurrentRequests: s.optional(s.lazy(() => quotaStatus3Schema)),
    serverErrorsPerProjectPerHour: s.optional(s.lazy(() => quotaStatus4Schema)),
    tokensPerHour: s.optional(s.lazy(() => quotaStatus5Schema)),
  },
  { additionalProperties: s.json() },
);
