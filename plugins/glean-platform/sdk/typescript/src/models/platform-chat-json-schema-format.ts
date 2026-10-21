import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Constrains the assistant response to a caller-supplied JSON Schema. */
export type PlatformChatJsonSchemaFormat = {
  /** Discriminator. Must be JSON_SCHEMA. @default "JSON_SCHEMA" */
  type?: "JSON_SCHEMA";
  /** A stable identifier for the schema. */
  name: string;
  /** An optional human-readable description of the schema. */
  description?: string;
  /** A JSON Schema object describing the desired output shape. */
  schema: Record<string, unknown>;
  /**
   * When true, the provider validates the response against the schema. Unsupported by some
   * providers; defaults to true.
   *
   * @default true
   */
  strict?: boolean;
};

export const platformChatJsonSchemaFormatSchema: Schema<PlatformChatJsonSchemaFormat> =
  s.object<PlatformChatJsonSchemaFormat>({
    type: s.defaulted(s.literal("JSON_SCHEMA"), "JSON_SCHEMA"),
    name: s.string(),
    description: s.optional(s.string()),
    schema: s.record(s.string(), s.unknown()),
    strict: s.defaulted(s.boolean(), true),
  });
