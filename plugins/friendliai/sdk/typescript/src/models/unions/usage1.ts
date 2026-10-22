import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chatUsageSchema, type ChatUsage } from "../chat-usage.js";

export type Usage1 = ChatUsage;

export const usage1Schema: Schema<Usage1> = s.of<Usage1>(s.union([s.lazy(() => chatUsageSchema)]));
