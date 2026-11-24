import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Transport type (1=SIP URI, 4=Phone number, 5=SIP device, 10=Webphone, 12=WebSocket). 12 requires
 * an account enabled for voice streaming.
 */
export const Transport1 = {
  _1: 1,
  _4: 4,
  _5: 5,
  _10: 10,
  _12: 12,
} as const;
export type Transport1 = (typeof Transport1)[keyof typeof Transport1] | (number & {});

export const transport1Schema: EnumSchema<Transport1> = s.enumOf<Transport1>(Transport1);
