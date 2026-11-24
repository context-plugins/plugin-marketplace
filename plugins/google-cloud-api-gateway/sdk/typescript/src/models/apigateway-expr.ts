import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like
 * expression language. The syntax and semantics of CEL are documented at
 * https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit"
 * description: "Determines if a summary is less than 100 chars" expression:
 * "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description:
 * "Determines if requestor is the document owner" expression: "document.owner ==
 * request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine
 * whether the document should be publicly visible" expression: "document.type != 'private' &&
 * document.type != 'internal'" Example (Data Manipulation): title: "Notification string"
 * description: "Create a notification string with a timestamp." expression: "'New message received
 * at ' + string(document.create_time)" The exact variables and functions that may be referenced
 * within an expression are determined by the service that evaluates it. See the service
 * documentation for additional information.
 */
export type ApigatewayExpr = {
  /**
   * Optional. Title for the expression, i.e. a short string describing its purpose. This can be
   * used e.g. in UIs which allow to enter the expression.
   */
  title?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /**
   * Optional. String indicating the location of the expression for error reporting, e.g. a file
   * name and a position in the file.
   */
  location?: string;
  /**
   * Optional. Description of the expression. This is a longer text which describes the expression,
   * e.g. when hovered over it in a UI.
   */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayExprSchema: Schema<ApigatewayExpr> = s.object<ApigatewayExpr>(
  {
    title: s.optional(s.string()),
    expression: s.optional(s.string()),
    location: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
