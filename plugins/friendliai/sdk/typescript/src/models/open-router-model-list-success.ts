import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  openRouterModelCatalogResponseItemSchema,
  type OpenRouterModelCatalogResponseItem,
} from "./open-router-model-catalog-response-item.js";

/** `/v1/openrouter/models` API response. */
export type OpenRouterModelListSuccess = {
  data: OpenRouterModelCatalogResponseItem[];
};

export const openRouterModelListSuccessSchema: Schema<OpenRouterModelListSuccess> =
  s.object<OpenRouterModelListSuccess>({
    data: s.array(s.lazy(() => openRouterModelCatalogResponseItemSchema)),
  });
