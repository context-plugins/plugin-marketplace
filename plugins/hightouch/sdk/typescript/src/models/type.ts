import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The event's type. One of track, identify, page, screen, or group. Required. */
export const Type = {
  Track: "track",
  Identify: "identify",
  Page: "page",
  Screen: "screen",
  Group: "group",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
