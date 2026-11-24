import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";

export type Signer1JuriSignTemplatesApi = {
  id?: string;
  name?: string;
  email?: string;
  status?: Status2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signer1JuriSignTemplatesApiProperties: s.Shape<Signer1JuriSignTemplatesApi> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  status: s.optional(s.lazy(() => status2Schema)),
};

export const signer1JuriSignTemplatesApiInternalSchema: Schema<Signer1JuriSignTemplatesApi> =
  s.object<Signer1JuriSignTemplatesApi>(signer1JuriSignTemplatesApiProperties, {
    additionalProperties: s.json(),
  });

export const signer1JuriSignTemplatesApiSchema: Schema<Signer1JuriSignTemplatesApi> = s.lazySchema(() =>
  s.object<Signer1JuriSignTemplatesApi>(
    {
      ...signer1JuriSignTemplatesApiProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
