import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Kind, kindSchema } from "./kind.js";
import {
  scopeHudPlatformChecksApiSchema,
  type ScopeHudPlatformChecksApi,
} from "./scope-hud-platform-checks-api.js";
import { descriptionSchema, type Description } from "./unions/description.js";

/** A team-owned environment pipeline available to DataVendor. */
export type QcPipelineRegistrationResponse = {
  id: string;
  ownerTeamId: string;
  assetType: string;
  /** @default Kind.Environment */
  kind?: Kind;
  scope: ScopeHudPlatformChecksApi;
  key: string;
  label: string;
  description: Description;
  registryId: string;
  scenarioName: string;
  model: string;
  passThreshold: number;
  creditPrice: number;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qcPipelineRegistrationResponseSchema: Schema<QcPipelineRegistrationResponse> =
  s.object<QcPipelineRegistrationResponse>(
    {
      id: s.string(),
      ownerTeamId: s.string(),
      assetType: s.string(),
      kind: s.defaulted(kindSchema, Kind.Environment),
      scope: scopeHudPlatformChecksApiSchema,
      key: s.string(),
      label: s.string(),
      description: descriptionSchema,
      registryId: s.string(),
      scenarioName: s.string(),
      model: s.string(),
      passThreshold: s.float64(),
      creditPrice: s.float64(),
      enabled: s.boolean(),
      createdAt: s.dateTime(),
      updatedAt: s.dateTime(),
      _keysMap: {
        ownerTeamId: "owner_team_id",
        assetType: "asset_type",
        registryId: "registry_id",
        scenarioName: "scenario_name",
        passThreshold: "pass_threshold",
        creditPrice: "credit_price",
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
    { additionalProperties: s.json() },
  );
