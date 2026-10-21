import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesUsageSchema, type ResponsesUsage } from "../responses-usage.js";

/**
 * Represents token usage details including input tokens, output tokens, a breakdown of output
 * tokens, and the total tokens used.
 */
export type Usage4 = ResponsesUsage;

export const usage4Schema: Schema<Usage4> = s.of<Usage4>(s.union([s.lazy(() => responsesUsageSchema)]));
