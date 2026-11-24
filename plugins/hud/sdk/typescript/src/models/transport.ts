import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Transport = {
  Http: "http",
  Stdio: "stdio",
  Channel: "channel",
} as const;
export type Transport = (typeof Transport)[keyof typeof Transport] | (string & {});

export const transportSchema: EnumSchema<Transport> = s.enumOf<Transport>(Transport);
