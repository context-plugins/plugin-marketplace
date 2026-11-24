import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";
import { sizeSchema, type Size } from "./unions/size.js";

export type BuildSourceEntry = {
  name: string;
  path: string;
  type: Type;
  size?: Size;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildSourceEntrySchema: Schema<BuildSourceEntry> = s.object<BuildSourceEntry>(
  {
    name: s.string(),
    path: s.string(),
    type: typeSchema,
    size: s.optional(s.lazy(() => sizeSchema)),
  },
  { additionalProperties: s.json() },
);
