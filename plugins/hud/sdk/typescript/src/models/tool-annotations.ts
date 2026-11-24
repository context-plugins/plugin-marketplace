import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destructivehintSchema, type Destructivehint } from "./unions/destructivehint.js";
import { idempotenthintSchema, type Idempotenthint } from "./unions/idempotenthint.js";
import { openworldhintSchema, type Openworldhint } from "./unions/openworldhint.js";
import { readonlyhintSchema, type Readonlyhint } from "./unions/readonlyhint.js";
import { titleSchema, type Title } from "./unions/title.js";

/**
 * Additional properties describing a Tool to clients.
 *
 * NOTE: all properties in ToolAnnotations are **hints**. They are not guaranteed to provide a
 * faithful description of tool behavior (including descriptive properties like `title`).
 *
 * Clients should never make tool use decisions based on ToolAnnotations received from untrusted
 * servers.
 */
export type ToolAnnotations = {
  title?: Title;
  readOnlyHint?: Readonlyhint;
  destructiveHint?: Destructivehint;
  idempotentHint?: Idempotenthint;
  openWorldHint?: Openworldhint;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const toolAnnotationsSchema: Schema<ToolAnnotations> = s.object<ToolAnnotations>(
  {
    title: s.optional(s.lazy(() => titleSchema)),
    readOnlyHint: s.optional(s.lazy(() => readonlyhintSchema)),
    destructiveHint: s.optional(s.lazy(() => destructivehintSchema)),
    idempotentHint: s.optional(s.lazy(() => idempotenthintSchema)),
    openWorldHint: s.optional(s.lazy(() => openworldhintSchema)),
  },
  { additionalProperties: s.json() },
);
