import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rule3InternalSchema, rule3Schema, type Rule3 } from "./unions/rule3.js";

export type ApiV1StyleguideRequest1 = {
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
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
  /**
   * The style rules to enforce: 1-20 rules, each a rule name string (at most 80 characters) or a
   * {name, description} object (description at most 400 characters adds nuance the model follows).
   * Names must be unique case-insensitively.
   */
  rules?: Rule3[];
  /**
   * The name of a saved ruleset (created via POST /api/v1/styleguide/rulesets) to check against in
   * place of inline rules. Matched case-insensitively within the API key's account (its team, for
   * team keys). Provide exactly one of rules or ruleset.
   */
  ruleset: string;
  /** The text to check. Checked as submitted — markup is not stripped. */
  text: string;
  /**
   * Batch form: 1 to 10 texts, each processed with the same options as a single request. Send
   * exactly one of `text` or `texts`; the response is then {"results": [...]}, one single-text
   * response per input text in input order. Size limits are on the endpoint's docs page -- most cap
   * the combined length of all items at the single-text limit.
   */
  texts?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1StyleguideRequest1Properties: s.Shape<ApiV1StyleguideRequest1> = {
  key: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  rules: s.optional(s.array(s.lazy(() => rule3InternalSchema))),
  ruleset: s.string(),
  text: s.string(),
  texts: s.optional(s.array(s.string())),
  _keysMap: {
    returnUsage: "return_usage",
  },
};

export const apiV1StyleguideRequest1InternalSchema: Schema<ApiV1StyleguideRequest1> =
  s.object<ApiV1StyleguideRequest1>(apiV1StyleguideRequest1Properties, { additionalProperties: s.json() });

export const apiV1StyleguideRequest1Schema: Schema<ApiV1StyleguideRequest1> = s.lazySchema(() =>
  s.object<ApiV1StyleguideRequest1>(
    {
      ...apiV1StyleguideRequest1Properties,
      rules: s.optional(s.array(s.lazy(() => rule3Schema)).check(s.minLength(1), s.maxLength(20))),
      ruleset: s.string().check(s.minLength(1), s.maxLength(100)),
      text: s.string().check(s.minLength(1), s.maxLength(10000)),
      texts: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(10000))).check(s.minLength(1), s.maxLength(10)),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
