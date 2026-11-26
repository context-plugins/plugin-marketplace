import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  reason1AlphAiRestRadarApiSchema,
  type Reason1AlphAiRestRadarApi,
} from "../reason1-alph-ai-rest-radar-api.js";

export type Reason111 = Reason1AlphAiRestRadarApi;

export const reason111Schema: Schema<Reason111> = s.of<Reason111>(
  s.union([s.lazy(() => reason1AlphAiRestRadarApiSchema)]),
);
