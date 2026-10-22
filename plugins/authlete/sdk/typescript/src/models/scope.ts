import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pairSchema, type Pair } from "./pair.js";
import { taggedValueSchema, type TaggedValue } from "./tagged-value.js";

export type Scope = {
  /** The name of the scope. */
  name?: string;
  /**
   * `true` to mark the scope as default. Scopes marked as default are regarded as requested when an
   * authorization request from a client application does not contain scope request parameter.
   */
  defaultEntry?: boolean;
  /** The description about the scope. */
  description?: string;
  /** The descriptions about this scope in multiple languages. */
  descriptions?: TaggedValue[];
  /** The attributes of the scope. */
  attributes?: Pair[] | null;
};

export const scopeSchema: Schema<Scope> = s.object<Scope>({
  name: s.optional(s.string()),
  defaultEntry: s.optional(s.boolean()),
  description: s.optional(s.string()),
  descriptions: s.optional(s.array(s.lazy(() => taggedValueSchema))),
  attributes: s.optionalNullable(s.array(s.lazy(() => pairSchema))),
});
