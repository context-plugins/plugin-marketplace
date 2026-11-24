import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Input for creating a packaged component. */
export type PackagedComponentInput = {
  /** ID of the component to package. */
  componentId: string;
  /** Version of the component to include in the package. */
  componentVersion: string;
  /** Optional version label for the package. */
  packageVersion?: string;
  /** Optional notes about this package version. */
  notes?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const packagedComponentInputSchema: Schema<PackagedComponentInput> = s.object<PackagedComponentInput>(
  {
    componentId: s.string(),
    componentVersion: s.string(),
    packageVersion: s.optional(s.string()),
    notes: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
