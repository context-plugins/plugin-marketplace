import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The condition that is associated with this binding. If the condition evaluates to `true`, then
 * this binding applies to the current request. If the condition evaluates to `false`, then this
 * binding does not apply to the current request. However, a different role binding might grant the
 * same role to one or more of the principals in this binding. To learn which resources support
 * conditions in their IAM policies, see the [IAM
 * documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
 */
export type Expr2 = {
  /**
   * Optional. Title for the expression, i.e. a short string describing its purpose. This can be
   * used e.g. in UIs which allow to enter the expression.
   */
  title?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /**
   * Optional. Description of the expression. This is a longer text which describes the expression,
   * e.g. when hovered over it in a UI.
   */
  description?: string;
  /**
   * Optional. String indicating the location of the expression for error reporting, e.g. a file
   * name and a position in the file.
   */
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expr2Schema: Schema<Expr2> = s.object<Expr2>(
  {
    title: s.optional(s.string()),
    expression: s.optional(s.string()),
    description: s.optional(s.string()),
    location: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
