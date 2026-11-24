import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PeopleFindByEmailRequest = {
  /** Email addresses to enrich. */
  emails: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const peopleFindByEmailRequestProperties: s.Shape<PeopleFindByEmailRequest> = {
  emails: s.array(s.string()),
};

export const peopleFindByEmailRequestInternalSchema: Schema<PeopleFindByEmailRequest> =
  s.object<PeopleFindByEmailRequest>(peopleFindByEmailRequestProperties, { additionalProperties: s.json() });

export const peopleFindByEmailRequestSchema: Schema<PeopleFindByEmailRequest> = s.lazySchema(() =>
  s.object<PeopleFindByEmailRequest>(
    {
      ...peopleFindByEmailRequestProperties,
      emails: s.array(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
