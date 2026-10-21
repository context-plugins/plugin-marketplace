import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  modelCatalogResponseItemSchema,
  type ModelCatalogResponseItem,
} from "./model-catalog-response-item.js";

/** `/v1/models` API response. */
export type ServerlessModelListSuccess = {
  data: ModelCatalogResponseItem[];
};

export const serverlessModelListSuccessSchema: Schema<ServerlessModelListSuccess> =
  s.object<ServerlessModelListSuccess>({
    data: s.array(s.lazy(() => modelCatalogResponseItemSchema)),
  });
