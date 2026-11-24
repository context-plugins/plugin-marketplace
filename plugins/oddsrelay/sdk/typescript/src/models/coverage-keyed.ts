import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { products2Schema, type Products2 } from "./products2.js";

/** The keyed view: your key's products the region serves. */
export type CoverageKeyed = {
  region: string;
  generatedAt: string;
  products: Record<string, Products2>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coverageKeyedSchema: Schema<CoverageKeyed> = s.object<CoverageKeyed>(
  {
    region: s.string(),
    generatedAt: s.string(),
    products: s.record(
      s.string(),
      s.lazy(() => products2Schema),
    ),
    _keysMap: {
      generatedAt: "generated_at",
    },
  },
  { additionalProperties: s.json() },
);
