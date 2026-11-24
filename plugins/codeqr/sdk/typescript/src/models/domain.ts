import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Domain = {
  /** The domain of the project. */
  slug: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainSchema: Schema<Domain> = s.object<Domain>(
  {
    slug: s.string(),
  },
  { additionalProperties: s.json() },
);
