import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provider resource scope for the quota. */
export const TypeDoiTServiceQuotasApi = {
  Account: "account",
  Project: "project",
} as const;
export type TypeDoiTServiceQuotasApi =
  | (typeof TypeDoiTServiceQuotasApi)[keyof typeof TypeDoiTServiceQuotasApi]
  | (string & {});

export const typeDoiTServiceQuotasApiSchema: EnumSchema<TypeDoiTServiceQuotasApi> =
  s.enumOf<TypeDoiTServiceQuotasApi>(TypeDoiTServiceQuotasApi);
