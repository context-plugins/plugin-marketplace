import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ResourceTag = {
  /** The Amazon Resource Name (ARN) of the resource. */
  resourceArn?: string;
  /** The tags. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceTagSchema: Schema<ResourceTag> = s.object<ResourceTag>(
  {
    resourceArn: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
