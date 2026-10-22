import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionCode = {
  /** Path to the JavaScript file that implements the Function. */
  filename: string;
  /**
   * Maximum time, in milliseconds, that the Function is allowed to run asynchronously before timing
   * out.
   */
  asyncTimeout?: number;
  /** Minimum Cribl version required by the Function, if applicable. */
  criblVersion?: string;
  /**
   * If <code>true</code>, the Function is disabled and will not execute in a Pipeline. Otherwise,
   * <code>false</code>.
   */
  disabled?: boolean;
  /** Category group the Function belongs to. */
  group: string;
  /**
   * If <code>true</code>, the Function handles stream signals such as <code>flush</code> and
   * <code>close</code>. Otherwise, <code>false</code>.
   */
  handleSignals?: boolean;
  /** Identifier of the Function. Always <code>code</code> @default "code" */
  id?: "code";
  /** Time the Function module was loaded, in milliseconds since the Unix epoch. */
  loadTime: number;
  /** Time the Function module was last modified, in milliseconds since the Unix epoch. */
  modTime: number;
  /** Display name of the Function. */
  name: string;
  /** If <code>true</code>, the Function executes synchronously. Otherwise, <code>false</code>. */
  sync?: boolean;
  /** UI Schema that controls how the Function's configuration form is rendered. */
  uischema: Record<string, unknown>;
  /** Version string of the Function. */
  version: string;
  /** JSON Schema document that describes the Function configuration. */
  schema?: Record<string, unknown>;
};

export const functionCodeSchema: Schema<FunctionCode> = s.object<FunctionCode>({
  filename: s.string(),
  asyncTimeout: s.optional(s.float64()),
  criblVersion: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  group: s.string(),
  handleSignals: s.optional(s.boolean()),
  id: s.defaulted(s.literal("code"), "code"),
  loadTime: s.float64(),
  modTime: s.float64(),
  name: s.string(),
  sync: s.optional(s.boolean()),
  uischema: s.record(s.string(), s.unknown()),
  version: s.string(),
  schema: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    filename: "__filename",
    criblVersion: "cribl_version",
  },
});
