import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { objectRelmCrmDealsApiSchema, type ObjectRelmCrmDealsApi } from "./object-relm-crm-deals-api.js";
import { stageTypeSchema, type StageType } from "./stage-type.js";

export type Deal = {
  id?: string;
  object?: ObjectRelmCrmDealsApi;
  title?: string;
  /** Integer minor units (cents). */
  valueCents?: number | null;
  currency?: string;
  /**
   * Pipeline KEY. Every deal carries its pipeline - group/filter by (pipeline, stage), never by
   * stage alone (stage keys are not unique across pipelines).
   */
  pipeline?: string | null;
  /** Human display name of the pipeline. */
  pipelineName?: string | null;
  /** Stage KEY within this deal's pipeline. */
  stage?: string | null;
  /** Human display label of the stage. */
  stageLabel?: string | null;
  /**
   * Semantic stage type - use this for won/lost, cross-pipeline, instead of string-matching the
   * key.
   */
  stageType?: StageType | null;
  companyId?: string | null;
  primaryContactId?: string | null;
  closeDate?: string | null;
  customFields?: Record<string, unknown>;
  version?: number;
  mode?: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dealSchema: Schema<Deal> = s.object<Deal>(
  {
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => objectRelmCrmDealsApiSchema)),
    title: s.optional(s.string()),
    valueCents: s.optionalNullable(s.int()),
    currency: s.optional(s.string()),
    pipeline: s.optionalNullable(s.string()),
    pipelineName: s.optionalNullable(s.string()),
    stage: s.optionalNullable(s.string()),
    stageLabel: s.optionalNullable(s.string()),
    stageType: s.optionalNullable(s.lazy(() => stageTypeSchema)),
    companyId: s.optionalNullable(s.string()),
    primaryContactId: s.optionalNullable(s.string()),
    closeDate: s.optionalNullable(s.string()),
    customFields: s.optional(s.record(s.string(), s.unknown())),
    version: s.optional(s.int()),
    mode: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    updatedAt: s.optional(s.string()),
    deleted: s.optional(s.boolean()),
    _keysMap: {
      valueCents: "value_cents",
      pipelineName: "pipeline_name",
      stageLabel: "stage_label",
      stageType: "stage_type",
      companyId: "company_id",
      primaryContactId: "primary_contact_id",
      closeDate: "close_date",
      customFields: "custom_fields",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
