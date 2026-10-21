import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MaximumNumberOfResourcesSchema = {
  code: string;
  message: string;
};

export const maximumNumberOfResourcesSchemaSchema: Schema<MaximumNumberOfResourcesSchema> =
  s.object<MaximumNumberOfResourcesSchema>({
    code: s.string(),
    message: s.string(),
  });
