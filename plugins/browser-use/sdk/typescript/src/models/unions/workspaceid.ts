import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Workspaceid = string;

export const workspaceidSchema: Schema<Workspaceid> = s.of<Workspaceid>(s.union([s.string()]));
