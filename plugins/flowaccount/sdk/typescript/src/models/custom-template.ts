import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customTemplateInfoSchema, type CustomTemplateInfo } from "./custom-template-info.js";
import { dateInfoSchema, type DateInfo } from "./date-info.js";

export type CustomTemplate = {
  id?: number;
  name?: string | null;
  sheetIndex?: number;
  columns?: Record<string, unknown>;
  dateFormat?: DateInfo;
  ignoreLastRow?: boolean;
  imageUrl?: string | null;
  customTemplateInfo?: CustomTemplateInfo;
  formulas?: Record<string, unknown>;
};

export const customTemplateSchema: Schema<CustomTemplate> = s.object<CustomTemplate>({
  id: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  sheetIndex: s.optional(s.int()),
  columns: s.optional(s.record(s.string(), s.unknown())),
  dateFormat: s.optional(s.lazy(() => dateInfoSchema)),
  ignoreLastRow: s.optional(s.boolean()),
  imageUrl: s.optionalNullable(s.string()),
  customTemplateInfo: s.optional(s.lazy(() => customTemplateInfoSchema)),
  formulas: s.optional(s.record(s.string(), s.unknown())),
});
