import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Attachedfileids = string[];

export const attachedfileidsSchema: Schema<Attachedfileids> = s.of<Attachedfileids>(
  s.union([s.array(s.string())]),
);
