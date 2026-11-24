import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseTextConfigSchema, type ResponseTextConfig } from "../response-text-config.js";

/** Configuration for text output, including structured output. */
export type Text2 = ResponseTextConfig;

export const text2Schema: Schema<Text2> = s.of<Text2>(s.union([s.lazy(() => responseTextConfigSchema)]));
