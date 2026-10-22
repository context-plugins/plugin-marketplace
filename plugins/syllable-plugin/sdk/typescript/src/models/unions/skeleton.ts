import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Skeleton = string;

export const skeletonSchema: Schema<Skeleton> = s.of<Skeleton>(s.union([s.string()]));
