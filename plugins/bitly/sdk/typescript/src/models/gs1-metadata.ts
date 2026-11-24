import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gs1ValueSchema, type Gs1Value } from "./gs1-value.js";

/** Contains GS1 related metadata */
export type Gs1Metadata = {
  /** A list of GS1 application identifiers and their values */
  values?: Gs1Value[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gs1MetadataSchema: Schema<Gs1Metadata> = s.object<Gs1Metadata>(
  {
    values: s.optional(s.array(s.lazy(() => gs1ValueSchema))),
  },
  { additionalProperties: s.json() },
);
