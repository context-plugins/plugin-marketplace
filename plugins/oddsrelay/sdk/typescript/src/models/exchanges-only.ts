import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExchangesOnly = {
  True: "true",
  False: "false",
} as const;
export type ExchangesOnly = (typeof ExchangesOnly)[keyof typeof ExchangesOnly] | (string & {});

export const exchangesOnlySchema: EnumSchema<ExchangesOnly> = s.enumOf<ExchangesOnly>(ExchangesOnly);
