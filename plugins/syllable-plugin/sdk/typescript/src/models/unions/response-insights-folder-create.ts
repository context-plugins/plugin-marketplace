import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { insightsFolderSchema, type InsightsFolder } from "../insights-folder.js";

export type ResponseInsightsFolderCreate = InsightsFolder;

export const responseInsightsFolderCreateSchema: Schema<ResponseInsightsFolderCreate> =
  s.of<ResponseInsightsFolderCreate>(s.union([s.lazy(() => insightsFolderSchema)]));
