import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A value the caller supplies directly with the run. */
export type InlineSecretSource = {
  /** @default "inline" */
  type?: "inline";
  /**
   * The secret itself. Limited to 4096 bytes once encoded for encryption; non-ASCII characters cost
   * more than one byte each.
   */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const inlineSecretSourceProperties: s.Shape<InlineSecretSource> = {
  type: s.defaulted(s.literal("inline"), "inline"),
  value: s.string(),
};

export const inlineSecretSourceInternalSchema: Schema<InlineSecretSource> = s.object<InlineSecretSource>(
  inlineSecretSourceProperties,
  { additionalProperties: s.json() },
);

export const inlineSecretSourceSchema: Schema<InlineSecretSource> = s.lazySchema(() =>
  s.object<InlineSecretSource>(
    {
      ...inlineSecretSourceProperties,
      value: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
