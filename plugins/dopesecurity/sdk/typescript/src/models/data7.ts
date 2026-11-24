import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { custom2InternalSchema, custom2Schema, type Custom2 } from "./custom2.js";
import { default1Schema, type Default1 } from "./default1.js";

export type Data7 = {
  /** Whether the application bypass configuration is inherited from the base policy */
  inheritsFromBase: boolean;
  /** Custom application bypass entries defined by the admin */
  custom: Custom2;
  /** Default application bypass entries with their toggle states */
  default: Default1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const data7Properties: s.Shape<Data7> = {
  inheritsFromBase: s.boolean(),
  custom: custom2InternalSchema,
  default: default1Schema,
};

export const data7InternalSchema: Schema<Data7> = s.object<Data7>(data7Properties, {
  additionalProperties: s.json(),
});

export const data7Schema: Schema<Data7> = s.lazySchema(() =>
  s.object<Data7>(
    {
      ...data7Properties,
      custom: custom2Schema,
    },
    { additionalProperties: s.json() },
  ),
);
