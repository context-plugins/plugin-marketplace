import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentType1Schema, type EnvironmentType1 } from "./environment-type1.js";

export type RestoreEnvironmentRequest = {
  /** Name of the new restored environment */
  environmentName: string;
  /** Type of the new environment */
  environmentType: EnvironmentType1;
  /** Point in time to restore to (ISO 8601 UTC) */
  pointInTime: Date;
  /** Whether to uninstall per-tenant extensions @default false */
  skipInstallingPtEs?: boolean;
  /** Whether to uninstall third-party AppSource apps @default false */
  skipInstallingThirdPartyGlobalApps?: boolean;
  /** Whether to skip execution of cleanup codeunits @default false */
  skipEnvironmentCleanup?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const restoreEnvironmentRequestSchema: Schema<RestoreEnvironmentRequest> =
  s.object<RestoreEnvironmentRequest>(
    {
      environmentName: s.string(),
      environmentType: environmentType1Schema,
      pointInTime: s.dateTime(),
      skipInstallingPtEs: s.defaulted(s.boolean(), false),
      skipInstallingThirdPartyGlobalApps: s.defaulted(s.boolean(), false),
      skipEnvironmentCleanup: s.defaulted(s.boolean(), false),
      _keysMap: {
        environmentName: "EnvironmentName",
        environmentType: "EnvironmentType",
        pointInTime: "PointInTime",
        skipInstallingPtEs: "SkipInstallingPTEs",
        skipInstallingThirdPartyGlobalApps: "SkipInstallingThirdPartyGlobalApps",
        skipEnvironmentCleanup: "SkipEnvironmentCleanup",
      },
    },
    { additionalProperties: s.json() },
  );
