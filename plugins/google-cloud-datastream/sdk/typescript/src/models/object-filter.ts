import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceObjectIdentifier1Schema, type SourceObjectIdentifier1 } from "./source-object-identifier1.js";

/** Object filter to apply the rules to. */
export type ObjectFilter = {
  /** Specific source object identifier. */
  sourceObjectIdentifier?: SourceObjectIdentifier1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const objectFilterSchema: Schema<ObjectFilter> = s.object<ObjectFilter>(
  {
    sourceObjectIdentifier: s.optional(s.lazy(() => sourceObjectIdentifier1Schema)),
  },
  { additionalProperties: s.json() },
);
