import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceObjectIdentifier1Schema, type SourceObjectIdentifier1 } from "./source-object-identifier1.js";

/** Required. Object filter to apply the customization rules to. */
export type ObjectFilter1 = {
  /** Specific source object identifier. */
  sourceObjectIdentifier?: SourceObjectIdentifier1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const objectFilter1Schema: Schema<ObjectFilter1> = s.object<ObjectFilter1>(
  {
    sourceObjectIdentifier: s.optional(s.lazy(() => sourceObjectIdentifier1Schema)),
  },
  { additionalProperties: s.json() },
);
