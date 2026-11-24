import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type IsCopiedContext = boolean;

export const isCopiedContextSchema: Schema<IsCopiedContext> = s.of<IsCopiedContext>(s.union([s.boolean()]));
