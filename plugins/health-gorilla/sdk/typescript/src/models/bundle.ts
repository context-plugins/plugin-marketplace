import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entryModelSchema, type EntryModel } from "./entry-model.js";
import { linkSchema, type Link } from "./link.js";

export type Bundle = {
  resourceType?: string;
  type?: string;
  total?: number;
  link?: Link[];
  entry?: EntryModel[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bundleSchema: Schema<Bundle> = s.object<Bundle>(
  {
    resourceType: s.optional(s.string()),
    type: s.optional(s.string()),
    total: s.optional(s.int()),
    link: s.optional(s.array(s.lazy(() => linkSchema))),
    entry: s.optional(s.array(s.lazy(() => entryModelSchema))),
  },
  { additionalProperties: s.json() },
);
