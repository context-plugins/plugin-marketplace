import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Protocol = {
  Mqtt: "MQTT",
  Http: "HTTP",
} as const;
export type Protocol = (typeof Protocol)[keyof typeof Protocol] | (string & {});

export const protocolSchema: EnumSchema<Protocol> = s.enumOf<Protocol>(Protocol);
