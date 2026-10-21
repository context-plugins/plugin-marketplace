import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolStatusErrorSchema, type ToolStatusError } from "../tool-status-error.js";

export type Error4 = ToolStatusError;

export const error4Schema: Schema<Error4> = s.of<Error4>(s.union([s.lazy(() => toolStatusErrorSchema)]));
