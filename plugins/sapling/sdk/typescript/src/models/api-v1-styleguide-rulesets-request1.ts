import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rule21InternalSchema, rule21Schema, type Rule21 } from "./unions/rule21.js";

export type ApiV1StyleguideRulesetsRequest1 = {
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  name: string;
  /**
   * When true, a successful JSON-object response additionally carries "usage": {"characters": <n>}
   * — the billable character count this request submitted (0 for unbilled requests; the 2.5x
   * adjustment for logographic languages is included, so CJK requests report more than their raw
   * length). Repeat texts inside the billing deduplication window are still counted here even
   * though they are not re-charged, so the number is an upper bound on the final charge. Responses
   * whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An
   * existing usage field (such as account/status or completion token usage) is preserved unchanged.
   *
   * @default false
   */
  returnUsage?: boolean;
  /** Rule names must be unique (case-insensitive). */
  rules: Rule21[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1StyleguideRulesetsRequest1Properties: s.Shape<ApiV1StyleguideRulesetsRequest1> = {
  key: s.optional(s.string()),
  name: s.string(),
  returnUsage: s.defaulted(s.boolean(), false),
  rules: s.array(s.lazy(() => rule21InternalSchema)),
  _keysMap: {
    returnUsage: "return_usage",
  },
};

export const apiV1StyleguideRulesetsRequest1InternalSchema: Schema<ApiV1StyleguideRulesetsRequest1> =
  s.object<ApiV1StyleguideRulesetsRequest1>(apiV1StyleguideRulesetsRequest1Properties, {
    additionalProperties: s.json(),
  });

export const apiV1StyleguideRulesetsRequest1Schema: Schema<ApiV1StyleguideRulesetsRequest1> = s.lazySchema(
  () =>
    s.object<ApiV1StyleguideRulesetsRequest1>(
      {
        ...apiV1StyleguideRulesetsRequest1Properties,
        name: s.string().check(s.minLength(1), s.maxLength(100)),
        rules: s.array(s.lazy(() => rule21Schema)).check(s.minLength(1), s.maxLength(20)),
      },
      { additionalProperties: s.json() },
    ),
);
