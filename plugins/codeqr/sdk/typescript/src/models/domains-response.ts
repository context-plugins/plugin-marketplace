import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DomainsResponse = {
  /** The domain name. */
  slug: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainsResponseSchema: Schema<DomainsResponse> = s.object<DomainsResponse>(
  {
    slug: s.string(),
  },
  { additionalProperties: s.json() },
);
