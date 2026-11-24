import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  samplingBoostStatisticsDocumentSchema,
  type SamplingBoostStatisticsDocument,
} from "./sampling-boost-statistics-document.js";
import {
  samplingStatisticsDocumentSchema,
  type SamplingStatisticsDocument,
} from "./sampling-statistics-document.js";

export type SamplingTargetsRequest = {
  /** Information about rules that the service is using to sample requests. */
  samplingStatisticsDocuments: SamplingStatisticsDocument[];
  /** Information about rules that the service is using to boost sampling rate. */
  samplingBoostStatisticsDocuments?: SamplingBoostStatisticsDocument[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingTargetsRequestSchema: Schema<SamplingTargetsRequest> = s.object<SamplingTargetsRequest>(
  {
    samplingStatisticsDocuments: s.array(s.lazy(() => samplingStatisticsDocumentSchema)),
    samplingBoostStatisticsDocuments: s.optional(
      s.array(s.lazy(() => samplingBoostStatisticsDocumentSchema)),
    ),
    _keysMap: {
      samplingStatisticsDocuments: "SamplingStatisticsDocuments",
      samplingBoostStatisticsDocuments: "SamplingBoostStatisticsDocuments",
    },
  },
  { additionalProperties: s.json() },
);
