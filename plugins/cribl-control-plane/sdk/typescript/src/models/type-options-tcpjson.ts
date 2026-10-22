import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsTcpjson = {
  Tcpjson: "tcpjson",
} as const;
export type TypeOptionsTcpjson = (typeof TypeOptionsTcpjson)[keyof typeof TypeOptionsTcpjson] | (string & {});

export const typeOptionsTcpjsonSchema: EnumSchema<TypeOptionsTcpjson> =
  s.enumOf<TypeOptionsTcpjson>(TypeOptionsTcpjson);
