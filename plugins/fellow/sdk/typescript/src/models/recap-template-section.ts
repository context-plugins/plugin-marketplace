import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  apiRecapTemplateSectionTypeSchema,
  type ApiRecapTemplateSectionType,
} from "./api-recap-template-section-type.js";
import { contentSchema, type Content } from "./unions/content.js";

export type RecapTemplateSection = {
  title: string;
  type: ApiRecapTemplateSectionType;
  content: Content;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recapTemplateSectionSchema: Schema<RecapTemplateSection> = s.object<RecapTemplateSection>(
  {
    title: s.string(),
    type: apiRecapTemplateSectionTypeSchema,
    content: contentSchema,
  },
  { additionalProperties: s.json() },
);
