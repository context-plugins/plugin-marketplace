import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ImageName = string;

export const imageNameSchema: Schema<ImageName> = s.of<ImageName>(s.union([s.string()]));
