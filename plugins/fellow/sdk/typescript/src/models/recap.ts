import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recapTemplateSectionSchema, type RecapTemplateSection } from "./recap-template-section.js";

export type Recap = {
  id: string;
  isActive: boolean;
  title: string;
  templateCreator: string;
  sections: RecapTemplateSection[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recapSchema: Schema<Recap> = s.object<Recap>(
  {
    id: s.string(),
    isActive: s.boolean(),
    title: s.string(),
    templateCreator: s.string(),
    sections: s.array(s.lazy(() => recapTemplateSectionSchema)),
    _keysMap: {
      isActive: "is_active",
      templateCreator: "template_creator",
    },
  },
  { additionalProperties: s.json() },
);
