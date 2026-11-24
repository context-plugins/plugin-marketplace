import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lookalikeSpecInternalSchema, lookalikeSpecSchema, type LookalikeSpec } from "./lookalike-spec.js";
import { subtype1Schema, type Subtype1 } from "./subtype1.js";

export type CustomAudienceCreate = {
  name: string;
  description?: string;
  subtype: Subtype1;
  /** Source of customer data for CUSTOM subtype */
  customerFileSource?: string;
  /** Specification for lookalike audiences */
  lookalikeSpec?: LookalikeSpec;
  /** Rule-based audience definition for WEBSITE or APP subtypes */
  rule?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customAudienceCreateProperties: s.Shape<CustomAudienceCreate> = {
  name: s.string(),
  description: s.optional(s.string()),
  subtype: subtype1Schema,
  customerFileSource: s.optional(s.string()),
  lookalikeSpec: s.optional(s.lazy(() => lookalikeSpecInternalSchema)),
  rule: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    customerFileSource: "customer_file_source",
    lookalikeSpec: "lookalike_spec",
  },
};

export const customAudienceCreateInternalSchema: Schema<CustomAudienceCreate> =
  s.object<CustomAudienceCreate>(customAudienceCreateProperties, { additionalProperties: s.json() });

export const customAudienceCreateSchema: Schema<CustomAudienceCreate> = s.lazySchema(() =>
  s.object<CustomAudienceCreate>(
    {
      ...customAudienceCreateProperties,
      lookalikeSpec: s.optional(s.lazy(() => lookalikeSpecSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
