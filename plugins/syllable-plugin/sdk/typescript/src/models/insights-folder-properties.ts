import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InsightsFolderProperties = {
  Id: "id",
  Name: "name",
  NameExact: "name_exact",
  Label: "label",
  UpdatedAt: "updated_at",
} as const;
export type InsightsFolderProperties =
  | (typeof InsightsFolderProperties)[keyof typeof InsightsFolderProperties]
  | (string & {});

export const insightsFolderPropertiesSchema: EnumSchema<InsightsFolderProperties> =
  s.enumOf<InsightsFolderProperties>(InsightsFolderProperties);
