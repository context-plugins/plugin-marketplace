import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FunderState = string;

export const funderStateSchema: Schema<FunderState> = s.of<FunderState>(s.union([s.string()]));
