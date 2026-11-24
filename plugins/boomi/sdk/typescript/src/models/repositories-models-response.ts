import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelSchema, type Model } from "./model.js";

export type RepositoriesModelsResponse = {
  models?: Model[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repositoriesModelsResponseSchema: Schema<RepositoriesModelsResponse> =
  s.object<RepositoriesModelsResponse>(
    {
      models: s.optional(s.array(s.lazy(() => modelSchema))),
    },
    { additionalProperties: s.json() },
  );
