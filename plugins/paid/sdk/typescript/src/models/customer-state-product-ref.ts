import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerStateProductRef = {
  id: string;
  externalId: string | null;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerStateProductRefSchema: Schema<CustomerStateProductRef> =
  s.object<CustomerStateProductRef>(
    {
      id: s.string(),
      externalId: s.nullable(s.string()),
      name: s.string(),
    },
    { additionalProperties: s.json() },
  );
