import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  reasonAlphAiRestRadarApiSchema,
  type ReasonAlphAiRestRadarApi,
} from "../reason-alph-ai-rest-radar-api.js";

export type Reason11 = ReasonAlphAiRestRadarApi;

export const reason11Schema: Schema<Reason11> = s.of<Reason11>(
  s.union([s.lazy(() => reasonAlphAiRestRadarApiSchema)]),
);
