import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeCallnodeIoOutboundCallsApi = {
  None: "none",
  Basic: "basic",
  Bearer: "bearer",
  Header: "header",
} as const;
export type TypeCallnodeIoOutboundCallsApi =
  | (typeof TypeCallnodeIoOutboundCallsApi)[keyof typeof TypeCallnodeIoOutboundCallsApi]
  | (string & {});

export const typeCallnodeIoOutboundCallsApiSchema: EnumSchema<TypeCallnodeIoOutboundCallsApi> =
  s.enumOf<TypeCallnodeIoOutboundCallsApi>(TypeCallnodeIoOutboundCallsApi);
