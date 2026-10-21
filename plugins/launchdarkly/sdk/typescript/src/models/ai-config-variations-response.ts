import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiConfigVariationSchema, type AiConfigVariation } from "./ai-config-variation.js";

export type AiConfigVariationsResponse = {
  items: AiConfigVariation[];
  totalCount: number;
};

export const aiConfigVariationsResponseSchema: Schema<AiConfigVariationsResponse> =
  s.object<AiConfigVariationsResponse>({
    items: s.array(s.lazy(() => aiConfigVariationSchema)),
    totalCount: s.int(),
  });
