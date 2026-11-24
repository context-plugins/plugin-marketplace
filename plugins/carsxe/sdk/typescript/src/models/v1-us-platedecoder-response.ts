import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputSchema, type Input } from "./input.js";
import { specsResponse1Schema, type SpecsResponse1 } from "./specs-response1.js";

export type V1UsPlatedecoderResponse = {
  success?: boolean;
  input?: Input;
  vin?: string;
  year?: string;
  make?: string;
  model?: string;
  trim?: string;
  description?: string;
  engineSize?: string;
  bodyStyle?: string;
  transmission?: string;
  driveType?: string;
  fuelType?: string;
  color?: string;
  /** Full vehicle specifications (only present when `decodeVIN=true`). */
  vehicleSpecs?: SpecsResponse1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1UsPlatedecoderResponseSchema: Schema<V1UsPlatedecoderResponse> =
  s.object<V1UsPlatedecoderResponse>(
    {
      success: s.optional(s.boolean()),
      input: s.optional(s.lazy(() => inputSchema)),
      vin: s.optional(s.string()),
      year: s.optional(s.string()),
      make: s.optional(s.string()),
      model: s.optional(s.string()),
      trim: s.optional(s.string()),
      description: s.optional(s.string()),
      engineSize: s.optional(s.string()),
      bodyStyle: s.optional(s.string()),
      transmission: s.optional(s.string()),
      driveType: s.optional(s.string()),
      fuelType: s.optional(s.string()),
      color: s.optional(s.string()),
      vehicleSpecs: s.optional(s.lazy(() => specsResponse1Schema)),
      _keysMap: {
        engineSize: "engine_size",
        bodyStyle: "body_style",
        driveType: "drive_type",
        fuelType: "fuel_type",
        vehicleSpecs: "vehicle_specs",
      },
    },
    { additionalProperties: s.json() },
  );
