import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countInfoSchema, type CountInfo } from "./count-info.js";
import { favoriteInfoSchema, type FavoriteInfo } from "./favorite-info.js";
import { promptTemplateSchema, type PromptTemplate } from "./prompt-template.js";

export type PromptTemplateResult = {
  promptTemplate?: PromptTemplate;
  /** An opaque token that represents this prompt template */
  trackingToken?: string;
  favoriteInfo?: FavoriteInfo;
  runCount?: CountInfo;
};

export const promptTemplateResultSchema: Schema<PromptTemplateResult> = s.object<PromptTemplateResult>({
  promptTemplate: s.optional(s.lazy(() => promptTemplateSchema)),
  trackingToken: s.optional(s.string()),
  favoriteInfo: s.optional(s.lazy(() => favoriteInfoSchema)),
  runCount: s.optional(s.lazy(() => countInfoSchema)),
});
