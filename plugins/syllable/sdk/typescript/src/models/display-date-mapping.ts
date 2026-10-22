import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind1Schema, type Kind1 } from "./unions/kind1.js";
import { skeletonSchema, type Skeleton } from "./unions/skeleton.js";
import { style1Schema, type Style1 } from "./unions/style1.js";
import { value5Schema, type Value5 } from "./unions/value5.js";

/** A date value resolved from one result item before localization. */
export type DisplayDateMapping = {
  value: Value5;
  skeleton?: Skeleton;
  kind?: Kind1;
  style?: Style1;
};

export const displayDateMappingSchema: Schema<DisplayDateMapping> = s.object<DisplayDateMapping>({
  value: value5Schema,
  skeleton: s.optional(s.lazy(() => skeletonSchema)),
  kind: s.optional(s.lazy(() => kind1Schema)),
  style: s.optional(s.lazy(() => style1Schema)),
});
