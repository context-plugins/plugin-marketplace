import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";
import { v1BetaAudienceDimensionSchema, type V1BetaAudienceDimension } from "./v1-beta-audience-dimension.js";

/**
 * Configuration data about AudienceExport being queried. Returned to help interpret the audience
 * rows in this response. For example, the dimensions in this AudienceExport correspond to the
 * columns in the AudienceRows.
 */
export type AudienceExport1 = {
  /** Output only. The percentage completed for this audience export ranging between 0 to 100. */
  percentageCompleted?: number;
  /** Output only. The descriptive display name for this audience. For example, "Purchasers". */
  audienceDisplayName?: string;
  /** Output only. The total number of rows in the AudienceExport result. */
  rowCount?: number;
  /** Required. The dimensions requested and displayed in the query response. */
  dimensions?: V1BetaAudienceDimension[];
  /**
   * Required. The audience resource name. This resource name identifies the audience being listed
   * and is shared between the Analytics Data & Admin APIs. Format:
   * `properties/{property}/audiences/{audience}`
   */
  audience?: string;
  /** Output only. The current state for this AudienceExport. */
  state?: State;
  /**
   * Output only. Error message is populated when an audience export fails during creation. A common
   * reason for such a failure is quota exhaustion.
   */
  errorMessage?: string;
  /**
   * Output only. The total quota tokens charged during creation of the AudienceExport. Because this
   * token count is based on activity from the `CREATING` state, this tokens charged will be fixed
   * once an AudienceExport enters the `ACTIVE` or `FAILED` states.
   */
  creationQuotaTokensCharged?: number;
  /**
   * Output only. The time when CreateAudienceExport was called and the AudienceExport began the
   * `CREATING` state.
   */
  beginCreatingTime?: string;
  /**
   * Output only. Identifier. The audience export resource name assigned during creation. This
   * resource name identifies this `AudienceExport`. Format:
   * `properties/{property}/audienceExports/{audience_export}`
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audienceExport1Schema: Schema<AudienceExport1> = s.object<AudienceExport1>(
  {
    percentageCompleted: s.optional(s.float64()),
    audienceDisplayName: s.optional(s.string()),
    rowCount: s.optional(s.int()),
    dimensions: s.optional(s.array(s.lazy(() => v1BetaAudienceDimensionSchema))),
    audience: s.optional(s.string()),
    state: s.optional(s.lazy(() => stateSchema)),
    errorMessage: s.optional(s.string()),
    creationQuotaTokensCharged: s.optional(s.int()),
    beginCreatingTime: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
