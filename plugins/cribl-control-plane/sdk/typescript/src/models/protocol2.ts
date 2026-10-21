import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select whether to leverage gRPC or HTTP for OpenTelemetry */
export const Protocol2 = {
  Grpc: "grpc",
  Http: "http",
} as const;
export type Protocol2 = (typeof Protocol2)[keyof typeof Protocol2] | (string & {});

export const protocol2Schema: EnumSchema<Protocol2> = s.enumOf<Protocol2>(Protocol2);
