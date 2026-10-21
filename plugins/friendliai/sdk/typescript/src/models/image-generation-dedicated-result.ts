import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./unions/data.js";

export type ImageGenerationDedicatedResult = {
  data: Data;
};

export const imageGenerationDedicatedResultSchema: Schema<ImageGenerationDedicatedResult> =
  s.object<ImageGenerationDedicatedResult>({
    data: dataSchema,
  });
