import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customBypassItemInternalSchema,
  customBypassItemSchema,
  type CustomBypassItem,
} from "./custom-bypass-item.js";

/** Custom application bypass entries defined by the admin */
export type Custom2 = {
  /** Custom bypass apps on macOS */
  mac: CustomBypassItem[];
  /** Custom bypass apps on Windows */
  windows: CustomBypassItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const custom2Properties: s.Shape<Custom2> = {
  mac: s.array(s.lazy(() => customBypassItemInternalSchema)),
  windows: s.array(s.lazy(() => customBypassItemInternalSchema)),
};

export const custom2InternalSchema: Schema<Custom2> = s.object<Custom2>(custom2Properties, {
  additionalProperties: s.json(),
});

export const custom2Schema: Schema<Custom2> = s.lazySchema(() =>
  s.object<Custom2>(
    {
      ...custom2Properties,
      mac: s.array(s.lazy(() => customBypassItemSchema)),
      windows: s.array(s.lazy(() => customBypassItemSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
