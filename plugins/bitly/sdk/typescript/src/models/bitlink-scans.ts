import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qrScansSchema, type QrScans } from "./qr-scans.js";
import { unitSchema, type Unit } from "./unit.js";

export type BitlinkScans = {
  scans?: QrScans[];
  units?: number;
  unit?: Unit;
  unitReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bitlinkScansSchema: Schema<BitlinkScans> = s.object<BitlinkScans>(
  {
    scans: s.optional(s.array(s.lazy(() => qrScansSchema))),
    units: s.optional(s.int()),
    unit: s.optional(s.lazy(() => unitSchema)),
    unitReference: s.optional(s.string()),
    _keysMap: {
      unitReference: "unit_reference",
    },
  },
  { additionalProperties: s.json() },
);
