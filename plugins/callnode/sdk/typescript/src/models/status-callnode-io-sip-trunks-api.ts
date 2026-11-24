import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusCallnodeIoSipTrunksApi = {
  Active: "active",
  Disabled: "disabled",
} as const;
export type StatusCallnodeIoSipTrunksApi =
  | (typeof StatusCallnodeIoSipTrunksApi)[keyof typeof StatusCallnodeIoSipTrunksApi]
  | (string & {});

export const statusCallnodeIoSipTrunksApiSchema: EnumSchema<StatusCallnodeIoSipTrunksApi> =
  s.enumOf<StatusCallnodeIoSipTrunksApi>(StatusCallnodeIoSipTrunksApi);
