import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

/** Omitted resolution fields for an unresolved request or PERIOD approval. */
export type PlatformRequestResolutionFields = {
  /** Only PERIOD can omit the resolution target when scope is present. */
  scope?: Scope;
};

export const platformRequestResolutionFieldsSchema: Schema<PlatformRequestResolutionFields> =
  s.object<PlatformRequestResolutionFields>({
    scope: s.optional(s.lazy(() => scopeSchema)),
  });
