import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Publication status of the model. */
export const StatusBoomiDataHubModelsApi = {
  Draft: "DRAFT",
  Published: "PUBLISHED",
} as const;
export type StatusBoomiDataHubModelsApi =
  | (typeof StatusBoomiDataHubModelsApi)[keyof typeof StatusBoomiDataHubModelsApi]
  | (string & {});

export const statusBoomiDataHubModelsApiSchema: EnumSchema<StatusBoomiDataHubModelsApi> =
  s.enumOf<StatusBoomiDataHubModelsApi>(StatusBoomiDataHubModelsApi);
