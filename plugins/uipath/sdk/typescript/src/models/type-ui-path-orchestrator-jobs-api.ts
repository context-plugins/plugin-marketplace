import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Licensing type of the robot */
export const TypeUiPathOrchestratorJobsApi = {
  Unattended: "Unattended",
  Attended: "Attended",
  NonProduction: "NonProduction",
  TestAutomation: "TestAutomation",
  RpaDeveloper: "RpaDeveloper",
  StudioX: "StudioX",
  HeadlessUnattended: "HeadlessUnattended",
} as const;
export type TypeUiPathOrchestratorJobsApi =
  | (typeof TypeUiPathOrchestratorJobsApi)[keyof typeof TypeUiPathOrchestratorJobsApi]
  | (string & {});

export const typeUiPathOrchestratorJobsApiSchema: EnumSchema<TypeUiPathOrchestratorJobsApi> =
  s.enumOf<TypeUiPathOrchestratorJobsApi>(TypeUiPathOrchestratorJobsApi);
