import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type11Schema, type Type11 } from "./type11.js";

export type SerializeTypeDelim = {
  /** Data output format. */
  type?: Type11;
  /** Delimiter character to use to split values. If left blank, will default to ','. */
  delimChar?: string;
  /** Character used to quote literal values. If left blank, will default to '"'. */
  quoteChar?: string;
  /**
   * Escape character used to escape delimiter or quote character. If left blank, will default to
   * the Quote char.
   */
  escapeChar?: string;
  /** Field value representing the null value. Null fields will be omitted. */
  nullValue?: string;
};

export const serializeTypeDelimSchema: Schema<SerializeTypeDelim> = s.object<SerializeTypeDelim>({
  type: s.optional(s.lazy(() => type11Schema)),
  delimChar: s.optional(s.string()),
  quoteChar: s.optional(s.string()),
  escapeChar: s.optional(s.string()),
  nullValue: s.optional(s.string()),
});
