import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automationSchema, type Automation } from "./automation.js";

/** Paginated response containing automation records */
export type AutomationListResponse = {
  /** Total number of automations matching the query */
  totalCount?: number;
  /** Current page number */
  page?: number;
  /** Number of records per page */
  pageSize?: number;
  automations?: Automation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationListResponseSchema: Schema<AutomationListResponse> = s.object<AutomationListResponse>(
  {
    totalCount: s.optional(s.int()),
    page: s.optional(s.int()),
    pageSize: s.optional(s.int()),
    automations: s.optional(s.array(s.lazy(() => automationSchema))),
  },
  { additionalProperties: s.json() },
);
