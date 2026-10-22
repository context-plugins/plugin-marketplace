import * as schema from "zod/v4-mini";
import type { ZodMiniType } from "zod/v4-mini";
import type { Entry, Schema } from "./schema.js";

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

export function decodeWith<T>(zodType: ZodMiniType<T, unknown>, value: unknown): T {
  const result = zodType.safeParse(value);
  if (result.success) return result.data;
  throw new SchemaError(issuesMessage(result.error, value), result.error);
}

export function encodeWith<T, W>(zodType: ZodMiniType<T, W>, value: unknown): W {
  const result = schema.safeEncode(zodType, value as T);
  if (result.success) return result.data;
  throw new SchemaError(
    issuesMessage(result.error, value, "Type could not be encoded for the wire."),
    result.error,
  );
}

export function decodeEntry<V>(schema: Entry<V>, value: unknown): V {
  return isSchemaEntry(schema) ? schema.decode(value) : decodeWith(schema, value);
}

export function encodeEntry<V, W>(schema: Entry<V, W>, value: unknown): W {
  return isSchemaEntry(schema) ? schema.encode(value) : encodeWith(schema, value);
}

function isSchemaEntry<V, W>(entry: Entry<V, W>): entry is Schema<V, W> {
  return typeof (entry as { decode?: unknown }).decode === "function";
}

type SchemaIssue = {
  readonly path: readonly PropertyKey[];
  readonly message: string;
  readonly expected?: string | undefined;
  readonly format?: string | undefined;
  readonly options?: readonly unknown[] | undefined;
};

type SchemaIssues = { readonly issues: readonly SchemaIssue[] };

function issuesMessage(
  error: SchemaIssues,
  value: unknown,
  prefix = "Wire value could not be decoded.",
): string {
  const issues = error.issues.map((issue) => {
    const path = issue.path.map(String).join(".") || "<root>";
    return `${path}: ${issueReason(issue, valueAt(value, issue.path))}`;
  });
  return `${prefix} ${issues.join("; ")}`;
}

function issueReason(issue: SchemaIssue, actual: unknown): string {
  if (issue.expected !== undefined) return `expected ${issue.expected}, received ${typeName(actual)}`;
  if (issue.format !== undefined) return `expected ${issue.format} format, received ${typeName(actual)}`;
  if (issue.options !== undefined) {
    return `expected one of ${issue.options.map(literal).join(" | ")}, received ${typeName(actual)}`;
  }
  return issue.message;
}

function valueAt(value: unknown, path: readonly PropertyKey[]): unknown {
  let current = value;
  for (const key of path) {
    if (current === null || typeof current !== "object") return undefined;
    current = (current as Record<PropertyKey, unknown>)[key];
  }
  return current;
}

function typeName(value: unknown): string {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

function literal(value: unknown): string {
  return JSON.stringify(value) ?? "undefined";
}
