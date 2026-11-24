import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ApiBase = string;

export const apiBaseSchema: Schema<ApiBase> = s.of<ApiBase>(s.union([s.string()]));
