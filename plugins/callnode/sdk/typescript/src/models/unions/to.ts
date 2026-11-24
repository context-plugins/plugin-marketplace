import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The destination. An E.164 number, a `sip:` URI, or — together with `sipTrunkId` — an E.164 number
 * or a 1–64 character extension the trunk's host understands.
 */
export type To = string;

export const toInternalSchema: Schema<To> = s.of<To>(s.union([s.string()]));

export const toSchema: Schema<To> = s.lazySchema(() =>
  s.of<To>(
    s.union([
      s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$")),
      s
        .string()
        .check(
          s.pattern("^sip:[A-Za-z0-9._+\\-*#]{1,64}@[A-Za-z0-9.\\-]+(:\\d{1,5})?(;transport=(udp|tcp))?$"),
        ),
      s.string().check(s.pattern("^[0-9A-Za-z*#._\\-]{1,64}$")),
    ]),
  ),
);
