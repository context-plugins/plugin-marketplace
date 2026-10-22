import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesTextConfigSchema, type ResponsesTextConfig } from "../responses-text-config.js";

/**
 * Configuration options for a text response from the model. Can be plain text or structured JSON
 * data.
 */
export type Text1 = ResponsesTextConfig;

export const text1Schema: Schema<Text1> = s.of<Text1>(s.union([s.lazy(() => responsesTextConfigSchema)]));
