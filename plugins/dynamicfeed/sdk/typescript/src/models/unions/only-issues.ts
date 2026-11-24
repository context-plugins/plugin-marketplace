import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** only services currently degraded/down */
export type OnlyIssues = boolean;

export const onlyIssuesSchema: Schema<OnlyIssues> = s.of<OnlyIssues>(s.union([s.boolean()]));
