import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseTextConfigSchema, type ResponseTextConfig } from "../response-text-config.js";

export type Text1 = ResponseTextConfig;

export const text1Schema: Schema<Text1> = s.of<Text1>(s.union([s.lazy(() => responseTextConfigSchema)]));
