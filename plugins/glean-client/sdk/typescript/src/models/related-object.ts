import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadataSchema, type Metadata } from "./metadata.js";

export type RelatedObject = {
  /** The ID of the related object */
  id: string;
  /** Some metadata of the object which can be displayed, while not having the actual object. */
  metadata?: Metadata;
};

export const relatedObjectSchema: Schema<RelatedObject> = s.object<RelatedObject>({
  id: s.string(),
  metadata: s.optional(s.lazy(() => metadataSchema)),
});
