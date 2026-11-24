import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinksResponse = {
  /** The ID of the link. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksResponseSchema: Schema<LinksResponse> = s.object<LinksResponse>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
