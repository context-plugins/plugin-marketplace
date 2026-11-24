import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelSchema, type Model } from "./model.js";

/** Response message for ListModels. */
export type ListModelsResponse = {
  /** The models read. */
  models?: Model[];
  /**
   * A token to retrieve next page of results. Pass this token to the page_token field in the
   * ListModelsRequest to obtain the corresponding page.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listModelsResponseSchema: Schema<ListModelsResponse> = s.object<ListModelsResponse>(
  {
    models: s.optional(s.array(s.lazy(() => modelSchema))),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
