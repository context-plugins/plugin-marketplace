import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The CSV dialect descriptor. */
export type CsvDialect = {
  /**
   * A number to indicate the schema version of CSV Dialect. Version 1.0 was named CSV Dialect
   * Description Format and used different field names.
   *
   * @default 1.2
   */
  csvddfVersion?: number;
  /** A character sequence to use as the field separator. @default "," */
  delimiter?: string;
  /** Specifies the handling of quotes inside fields. @default true */
  doubleQuote?: boolean;
  /** Specifies the character sequence that must be used to terminate rows. @default "\r\n" */
  lineTerminator?: string;
  /** Specifies the null sequence, for example, `\N`. */
  nullSequence?: string;
  /** Specifies a one-character string to use as the quoting character. @default '"' */
  quoteChar?: string;
  /** Specifies a one-character string to use as the escape character. */
  escapeChar?: string;
  /**
   * Specifies the interpretation of whitespace immediately following a delimiter. If false,
   * whitespace immediately after a delimiter should be treated as part of the subsequent field.
   *
   * @default false
   */
  skipInitialSpace?: boolean;
  /**
   * Specifies if the file includes a header row, always as the first row in the file.
   *
   * @default true
   */
  header?: boolean;
  /**
   * Specifies that any row beginning with this one-character string, without preceeding whitespace,
   * causes the entire line to be ignored.
   */
  commentChar?: string;
  /** Specifies if the case of headers is meaningful. @default false */
  caseSensitiveHeader?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const csvDialectSchema: Schema<CsvDialect> = s.object<CsvDialect>(
  {
    csvddfVersion: s.defaulted(s.float64(), 1.2),
    delimiter: s.defaulted(s.string(), ","),
    doubleQuote: s.defaulted(s.boolean(), true),
    lineTerminator: s.defaulted(s.string(), "\r\n"),
    nullSequence: s.optional(s.string()),
    quoteChar: s.defaulted(s.string(), '"'),
    escapeChar: s.optional(s.string()),
    skipInitialSpace: s.defaulted(s.boolean(), false),
    header: s.defaulted(s.boolean(), true),
    commentChar: s.optional(s.string()),
    caseSensitiveHeader: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
