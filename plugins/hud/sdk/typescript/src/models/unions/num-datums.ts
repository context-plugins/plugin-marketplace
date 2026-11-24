import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type NumDatums = number;

export const numDatumsSchema: Schema<NumDatums> = s.of<NumDatums>(s.union([s.int()]));
