import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolStatusFileSchema, type ToolStatusFile } from "../tool-status-file.js";

export type Files = ToolStatusFile[];

export const filesSchema: Schema<Files> = s.of<Files>(s.union([s.array(s.lazy(() => toolStatusFileSchema))]));
