import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FailedRowsConfigurationStateDto = {
  Ready: "ready",
  DoNotDetectAutomatically: "doNotDetectAutomatically",
  AwaitingPrimaryKeysInformationFromAgent: "awaitingPrimaryKeysInformationFromAgent",
  AwaitingPrimaryKeysInformationFromRunner: "awaitingPrimaryKeysInformationFromRunner",
  ErrorMissingUniqueKeys: "errorMissingUniqueKeys",
} as const;
export type FailedRowsConfigurationStateDto =
  | (typeof FailedRowsConfigurationStateDto)[keyof typeof FailedRowsConfigurationStateDto]
  | (string & {});

export const failedRowsConfigurationStateDtoSchema: EnumSchema<FailedRowsConfigurationStateDto> =
  s.enumOf<FailedRowsConfigurationStateDto>(FailedRowsConfigurationStateDto);
