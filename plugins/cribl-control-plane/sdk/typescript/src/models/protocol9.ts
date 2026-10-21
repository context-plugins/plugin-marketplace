import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select a transport option for OpenTelemetry */
export const Protocol9 = {
  Grpc: "grpc",
  Http: "http",
} as const;
export type Protocol9 = (typeof Protocol9)[keyof typeof Protocol9] | (string & {});

export const protocol9Schema: EnumSchema<Protocol9> = s.enumOf<Protocol9>(Protocol9);
