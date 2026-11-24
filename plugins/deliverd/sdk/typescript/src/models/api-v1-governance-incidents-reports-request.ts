import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kindDeliverdDevGovernanceApiSchema,
  type KindDeliverdDevGovernanceApi,
} from "./kind-deliverd-dev-governance-api.js";

export type ApiV1GovernanceIncidentsReportsRequest = {
  /** initial, intermediate, final, or reclassification (as non-major) */
  kind: KindDeliverdDevGovernanceApi;
  /** What the report says, written for the person who signs it off and for the authority */
  content: string;
  /**
   * The report's structured fields. initial: discoveredBy, memberStates, originatedAtThirdParty,
   * businessContinuityActivated; intermediate: incidentType, occurredAt, recoveredAt,
   * authorityReference, clientsAffected, figuresAreEstimates, temporaryMeasures; final: rootCause,
   * rootCauseAddressedAt, resolvedAt, grossCostsEur, financialRecoveriesEur; reclassification:
   * reason
   */
  fields?: Record<string, unknown>;
  /** Who signs it off; the organisation's administrators when omitted */
  approvers?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1GovernanceIncidentsReportsRequestProperties: s.Shape<ApiV1GovernanceIncidentsReportsRequest> = {
  kind: kindDeliverdDevGovernanceApiSchema,
  content: s.string(),
  fields: s.optional(s.record(s.string(), s.unknown())),
  approvers: s.optional(s.array(s.string())),
};

export const apiV1GovernanceIncidentsReportsRequestInternalSchema: Schema<ApiV1GovernanceIncidentsReportsRequest> =
  s.object<ApiV1GovernanceIncidentsReportsRequest>(apiV1GovernanceIncidentsReportsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1GovernanceIncidentsReportsRequestSchema: Schema<ApiV1GovernanceIncidentsReportsRequest> =
  s.lazySchema(() =>
    s.object<ApiV1GovernanceIncidentsReportsRequest>(
      {
        ...apiV1GovernanceIncidentsReportsRequestProperties,
        content: s.string().check(s.minLength(1), s.maxLength(20000)),
        approvers: s.optional(
          s.array(s.string().check(s.minLength(1), s.maxLength(320))).check(s.maxLength(20)),
        ),
      },
      { additionalProperties: s.json() },
    ),
  );
