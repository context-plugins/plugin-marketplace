import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  ScopeHudPlatformChecksApi,
  scopeHudPlatformChecksApiSchema,
} from "./scope-hud-platform-checks-api.js";
import { creditPriceInternalSchema, creditPriceSchema, type CreditPrice } from "./unions/credit-price.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { modelInternalSchema, modelSchema, type Model } from "./unions/model.js";
import {
  passThresholdInternalSchema,
  passThresholdSchema,
  type PassThreshold,
} from "./unions/pass-threshold.js";

/** Register a team environment as a private DataVendor QC pipeline. */
export type QcPipelineCreateRequest = {
  assetType: string;
  /** @default ScopeHudPlatformChecksApi.Asset */
  scope?: ScopeHudPlatformChecksApi;
  key: string;
  label: string;
  description?: Description;
  registryId: string;
  scenarioName: string;
  model?: Model;
  passThreshold?: PassThreshold;
  creditPrice?: CreditPrice;
};

const qcPipelineCreateRequestProperties: s.Shape<QcPipelineCreateRequest> = {
  assetType: s.string(),
  scope: s.defaulted(scopeHudPlatformChecksApiSchema, ScopeHudPlatformChecksApi.Asset),
  key: s.string(),
  label: s.string(),
  description: s.optional(s.lazy(() => descriptionSchema)),
  registryId: s.string(),
  scenarioName: s.string(),
  model: s.optional(s.lazy(() => modelInternalSchema)),
  passThreshold: s.optional(s.lazy(() => passThresholdInternalSchema)),
  creditPrice: s.optional(s.lazy(() => creditPriceInternalSchema)),
  _keysMap: {
    assetType: "asset_type",
    registryId: "registry_id",
    scenarioName: "scenario_name",
    passThreshold: "pass_threshold",
    creditPrice: "credit_price",
  },
};

export const qcPipelineCreateRequestInternalSchema: Schema<QcPipelineCreateRequest> =
  s.object<QcPipelineCreateRequest>(qcPipelineCreateRequestProperties);

export const qcPipelineCreateRequestSchema: Schema<QcPipelineCreateRequest> = s.lazySchema(() =>
  s.object<QcPipelineCreateRequest>({
    ...qcPipelineCreateRequestProperties,
    assetType: s.string().check(s.minLength(1), s.maxLength(100)),
    key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9]+(?:_[a-z0-9]+)*$")),
    label: s.string().check(s.minLength(1), s.maxLength(120)),
    scenarioName: s.string().check(s.minLength(1), s.maxLength(200)),
    model: s.optional(s.lazy(() => modelSchema)),
    passThreshold: s.optional(s.lazy(() => passThresholdSchema)),
    creditPrice: s.optional(s.lazy(() => creditPriceSchema)),
  }),
);
