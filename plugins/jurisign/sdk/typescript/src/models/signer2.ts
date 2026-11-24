import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";

export type Signer2 = {
  id?: string;
  name?: string;
  email?: string;
  status?: Status2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signer2Properties: s.Shape<Signer2> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  status: s.optional(s.lazy(() => status2Schema)),
};

export const signer2InternalSchema: Schema<Signer2> = s.object<Signer2>(signer2Properties, {
  additionalProperties: s.json(),
});

export const signer2Schema: Schema<Signer2> = s.lazySchema(() =>
  s.object<Signer2>(
    {
      ...signer2Properties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
