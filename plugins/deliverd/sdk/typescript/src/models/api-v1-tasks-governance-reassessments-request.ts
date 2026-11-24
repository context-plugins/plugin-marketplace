import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1TasksGovernanceReassessmentsRequest = {
  /** Why the task needs reassessing */
  reason: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TasksGovernanceReassessmentsRequestProperties: s.Shape<ApiV1TasksGovernanceReassessmentsRequest> =
  {
    reason: s.string(),
  };

export const apiV1TasksGovernanceReassessmentsRequestInternalSchema: Schema<ApiV1TasksGovernanceReassessmentsRequest> =
  s.object<ApiV1TasksGovernanceReassessmentsRequest>(apiV1TasksGovernanceReassessmentsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1TasksGovernanceReassessmentsRequestSchema: Schema<ApiV1TasksGovernanceReassessmentsRequest> =
  s.lazySchema(() =>
    s.object<ApiV1TasksGovernanceReassessmentsRequest>(
      {
        ...apiV1TasksGovernanceReassessmentsRequestProperties,
        reason: s.string().check(s.minLength(1), s.maxLength(2000)),
      },
      { additionalProperties: s.json() },
    ),
  );
