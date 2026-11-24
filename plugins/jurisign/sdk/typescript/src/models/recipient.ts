import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Extra keys are accepted and become available as {{merge fields}} in the bulk template. */
export type Recipient = {
  nom: string;
  prenom: string;
  email: string;
  telephone?: string | null;
  adresse?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recipientProperties: s.Shape<Recipient> = {
  nom: s.string(),
  prenom: s.string(),
  email: s.string(),
  telephone: s.optionalNullable(s.string()),
  adresse: s.optionalNullable(s.string()),
};

export const recipientInternalSchema: Schema<Recipient> = s.object<Recipient>(recipientProperties, {
  additionalProperties: s.json(),
});

export const recipientSchema: Schema<Recipient> = s.lazySchema(() =>
  s.object<Recipient>(
    {
      ...recipientProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
