import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { code3Schema, type Code3 } from "./code3.js";

export type Error24 = {
  /** Dot-separated path to the failing field within the request (params, body, query). */
  field: string;
  /** Human-readable Zod validation message. */
  message: string;
  /** Machine-readable error code mapped from the Zod issue code. */
  code: Code3;
  /**
   * The rejected value stringified. May be an empty string when the value is not easily
   * serialisable.
   */
  value: string;
};

export const error24Schema: Schema<Error24> = s.object<Error24>({
  field: s.string(),
  message: s.string(),
  code: code3Schema,
  value: s.string(),
});
