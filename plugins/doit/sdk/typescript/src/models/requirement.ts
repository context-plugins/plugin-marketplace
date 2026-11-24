import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { candidateSchema, type Candidate } from "./candidate.js";
import {
  resolutionDoiTCloudFlowApiSchema,
  type ResolutionDoiTCloudFlowApi,
} from "./resolution-doi-tcloud-flow-api.js";
import { sectionSchema, type Section } from "./section.js";

export type Requirement = {
  section: Section;
  key: string;
  resolution: ResolutionDoiTCloudFlowApi;
  boundTo?: string;
  candidates?: Candidate[];
  consequenceIfUnbound?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requirementSchema: Schema<Requirement> = s.object<Requirement>(
  {
    section: sectionSchema,
    key: s.string(),
    resolution: resolutionDoiTCloudFlowApiSchema,
    boundTo: s.optional(s.string()),
    candidates: s.optional(s.array(s.lazy(() => candidateSchema))),
    consequenceIfUnbound: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
