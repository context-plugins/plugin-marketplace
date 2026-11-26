/**
 * A value did not match the schema that describes it.
 *
 * @remarks
 * Thrown on both directions by a codec used directly, as in `paymentInputSchema.decode(json)`, so
 * it names no call. Through an operation the same failure reaches you one level down, on the
 * `cause` of the `DecodeError` or `EncodeError` that does name the call.
 *
 * `message` names the field and the type expected, never the value, and `cause` carries the issue
 * list with its original paths. The value that failed is not kept.
 */
export class SchemaError extends Error {
  constructor(message: string, cause?: unknown) {
    super(message, cause === undefined ? undefined : { cause });
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

type SchemaIssue = {
  readonly path: readonly PropertyKey[];
  readonly message: string;
  readonly expected?: string | undefined;
  readonly format?: string | undefined;
  readonly options?: readonly unknown[] | undefined;
};

type SchemaIssues = { readonly issues: readonly SchemaIssue[] };

export function issuesMessage(error: SchemaIssues, prefix = "Wire value could not be decoded."): string {
  return `${prefix} ${issuesList(error)}`;
}

export function issuesList(error: SchemaIssues): string {
  return error.issues
    .map((issue) => `${issue.path.map(String).join(".") || "<root>"}: ${issueReason(issue)}`)
    .join("; ");
}

function issueReason(issue: SchemaIssue): string {
  if (issue.expected !== undefined) return `expected ${issue.expected}`;
  if (issue.format !== undefined) return `expected ${issue.format} format`;
  if (issue.options !== undefined) return `expected one of ${issue.options.map(literal).join(" | ")}`;
  return issue.message;
}

function literal(value: unknown): string {
  return JSON.stringify(value) ?? "undefined";
}
