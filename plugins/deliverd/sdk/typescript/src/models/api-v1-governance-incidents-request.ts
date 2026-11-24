import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { severity1Schema, type Severity1 } from "./severity1.js";

export type ApiV1GovernanceIncidentsRequest = {
  /** The governed task it concerns */
  taskId?: string;
  /** The AI system it concerns; the task's own system when only taskId is given */
  aiSystemId?: string;
  title: string;
  description?: string;
  /** high or critical closes the governance gate until a person resolves it */
  severity: Severity1;
  /**
   * When the organisation became aware of it, if earlier than now. DORA's reporting clocks start
   * here
   */
  detectedAt?: Date;
  /**
   * What kind of incident it was, which the AI risk scorecard counts: data_disclosure,
   * sensitive_data, prompt_injection, fairness, wrong_output, outage, unauthorised_action or other
   */
  category?: Category;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1GovernanceIncidentsRequestProperties: s.Shape<ApiV1GovernanceIncidentsRequest> = {
  taskId: s.optional(s.string()),
  aiSystemId: s.optional(s.string()),
  title: s.string(),
  description: s.optional(s.string()),
  severity: severity1Schema,
  detectedAt: s.optional(s.dateTime()),
  category: s.optional(s.lazy(() => categorySchema)),
};

export const apiV1GovernanceIncidentsRequestInternalSchema: Schema<ApiV1GovernanceIncidentsRequest> =
  s.object<ApiV1GovernanceIncidentsRequest>(apiV1GovernanceIncidentsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1GovernanceIncidentsRequestSchema: Schema<ApiV1GovernanceIncidentsRequest> = s.lazySchema(
  () =>
    s.object<ApiV1GovernanceIncidentsRequest>(
      {
        ...apiV1GovernanceIncidentsRequestProperties,
        title: s.string().check(s.minLength(1), s.maxLength(200)),
        description: s.optional(s.string().check(s.maxLength(4000))),
      },
      { additionalProperties: s.json() },
    ),
);
