import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Behavioural hints for the tool, exactly as declared by the tool server. No defaults are filled in
 * — see the per-field notes for what an absent value means.
 *
 * Per the MCP specification, clients MUST treat these hints as untrusted unless the tool server is
 * itself trusted. They are advisory metadata, not an authorization signal, and must not be the sole
 * basis of a security decision.
 */
export type ToolAnnotations = {
  title?: string;
  /**
   * True if the tool does not modify its environment. Always present. MCP defines no distinction
   * between an undeclared value and `false` here, so `false` means "not declared read-only" rather
   * than "declared mutating".
   */
  readOnlyHint?: boolean;
  /**
   * True if the tool may perform destructive updates. **Absent means the server did not declare
   * it**, for which the MCP default is `true`. Only meaningful when `readOnlyHint` is `false`.
   */
  destructiveHint?: boolean | null;
  /**
   * True if repeated calls with the same arguments have no additional effect. Always present; as
   * with `readOnlyHint`, `false` means "not declared idempotent". Only meaningful when
   * `readOnlyHint` is `false`.
   */
  idempotentHint?: boolean;
  /**
   * True if the tool interacts with an open world of external entities. **Absent means the server
   * did not declare it**, for which the MCP default is `true`.
   */
  openWorldHint?: boolean | null;
};

export const toolAnnotationsSchema: Schema<ToolAnnotations> = s.object<ToolAnnotations>({
  title: s.optional(s.string()),
  readOnlyHint: s.optional(s.boolean()),
  destructiveHint: s.optionalNullable(s.boolean()),
  idempotentHint: s.optional(s.boolean()),
  openWorldHint: s.optionalNullable(s.boolean()),
});
