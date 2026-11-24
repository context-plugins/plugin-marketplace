import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Transport type: 1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone, 12 = WebSocket, 13
 * = SDK (rings the account of one of your SDK tokens; set up through the SDK, not through this API)
 */
export const Transport = {
  _1: 1,
  _4: 4,
  _5: 5,
  _10: 10,
  _12: 12,
  _13: 13,
} as const;
export type Transport = (typeof Transport)[keyof typeof Transport] | (number & {});

export const transportSchema: EnumSchema<Transport> = s.enumOf<Transport>(Transport);
