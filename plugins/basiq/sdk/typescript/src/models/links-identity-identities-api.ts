import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinksIdentityIdentitiesApi = {
  /** Self link to the requested identity */
  self: string;
  /** Link to the job associated with this identity */
  job: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksIdentityIdentitiesApiSchema: Schema<LinksIdentityIdentitiesApi> =
  s.object<LinksIdentityIdentitiesApi>(
    {
      self: s.string(),
      job: s.string(),
    },
    { additionalProperties: s.json() },
  );
