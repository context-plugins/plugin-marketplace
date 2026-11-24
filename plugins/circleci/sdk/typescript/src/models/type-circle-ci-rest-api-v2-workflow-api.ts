import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of job */
export const TypeCircleCiRestApiV2WorkflowApi = {
  Build: "build",
  Approval: "approval",
} as const;
export type TypeCircleCiRestApiV2WorkflowApi =
  | (typeof TypeCircleCiRestApiV2WorkflowApi)[keyof typeof TypeCircleCiRestApiV2WorkflowApi]
  | (string & {});

export const typeCircleCiRestApiV2WorkflowApiSchema: EnumSchema<TypeCircleCiRestApiV2WorkflowApi> =
  s.enumOf<TypeCircleCiRestApiV2WorkflowApi>(TypeCircleCiRestApiV2WorkflowApi);
