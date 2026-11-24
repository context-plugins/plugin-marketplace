import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Metadata = {
  defaultDomains: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>(
  {
    defaultDomains: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
