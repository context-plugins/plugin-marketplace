import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payloadtypeindicatorSchema, type Payloadtypeindicator } from "../payloadtypeindicator.js";

/** ID returns `payloadId` only (default). PAYMENT returns `payloadId` and `securePayload`. */
export type Payloadtypeindicator1 = Payloadtypeindicator;

export const payloadtypeindicator1Schema: Schema<Payloadtypeindicator1> = s.of<Payloadtypeindicator1>(
  s.union([s.lazy(() => payloadtypeindicatorSchema)]),
);
