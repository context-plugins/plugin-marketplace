import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customBypassItemInternalSchema,
  customBypassItemSchema,
  type CustomBypassItem,
} from "./custom-bypass-item.js";
import { defaultBypassItemSchema, type DefaultBypassItem } from "./default-bypass-item.js";

export type Data5 = {
  /** Whether the URL bypass configuration is inherited from the base policy */
  inheritsFromBase: boolean;
  /** Custom URL bypass entries defined by the admin */
  custom: CustomBypassItem[];
  /** Default URL bypass entries with their toggle states */
  default: DefaultBypassItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const data5Properties: s.Shape<Data5> = {
  inheritsFromBase: s.boolean(),
  custom: s.array(s.lazy(() => customBypassItemInternalSchema)),
  default: s.array(s.lazy(() => defaultBypassItemSchema)),
};

export const data5InternalSchema: Schema<Data5> = s.object<Data5>(data5Properties, {
  additionalProperties: s.json(),
});

export const data5Schema: Schema<Data5> = s.lazySchema(() =>
  s.object<Data5>(
    {
      ...data5Properties,
      custom: s.array(s.lazy(() => customBypassItemSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
