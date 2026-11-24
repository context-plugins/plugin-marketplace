import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether this is a physical machine or a cloud robot template */
export const TypeUiPathOrchestratorMachinesApi = {
  Standard: "Standard",
  Template: "Template",
} as const;
export type TypeUiPathOrchestratorMachinesApi =
  | (typeof TypeUiPathOrchestratorMachinesApi)[keyof typeof TypeUiPathOrchestratorMachinesApi]
  | (string & {});

export const typeUiPathOrchestratorMachinesApiSchema: EnumSchema<TypeUiPathOrchestratorMachinesApi> =
  s.enumOf<TypeUiPathOrchestratorMachinesApi>(TypeUiPathOrchestratorMachinesApi);
