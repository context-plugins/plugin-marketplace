import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Normalized vehicle specifications. Field availability varies by auction source and lot. */
export type VehicleSpecs = {
  /**
   * Normalized body style used by the body_style filter. IAAI uses VehicleClass. Copart primarily
   * uses the source-backed Body Style field; when that source field is missing, a conservative
   * fallback is allowed only from explicit vehicle-type labels that are themselves body categories
   * (for example Sedan, SUV, Coupe, Convertible). Generic AUTOMOBILE is not guessed.
   */
  bodyStyle?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vehicleSpecsSchema: Schema<VehicleSpecs> = s.object<VehicleSpecs>(
  {
    bodyStyle: s.optionalNullable(s.string()),
    _keysMap: {
      bodyStyle: "body_style",
    },
  },
  { additionalProperties: s.json() },
);
