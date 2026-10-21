import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ugcTypeSchema, type UgcType } from "./ugc-type.js";

export type UgcAction = {
  create: UgcType;
};

export const ugcActionSchema: Schema<UgcAction> = s.object<UgcAction>({
  create: ugcTypeSchema,
});
