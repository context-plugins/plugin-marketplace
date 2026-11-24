import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { globalFieldSchema, type GlobalField } from "./global-field.js";

/** A list of global field definitions in the stack. */
export type GlobalFieldList = {
  /** Array of global field objects. */
  globalFields?: GlobalField[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const globalFieldListSchema: Schema<GlobalFieldList> = s.object<GlobalFieldList>(
  {
    globalFields: s.optional(s.array(s.lazy(() => globalFieldSchema))),
    _keysMap: {
      globalFields: "global_fields",
    },
  },
  { additionalProperties: s.json() },
);
