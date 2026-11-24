import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LastClicked = string;

export const lastClickedSchema: Schema<LastClicked> = s.of<LastClicked>(s.union([s.string()]));
