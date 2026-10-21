import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { airlineSchema, type Airline } from "../airline.js";

/** Contains information about an airline travel, if applicable. */
export type Airline12 = Airline;

export const airline12Schema: Schema<Airline12> = s.of<Airline12>(s.union([s.lazy(() => airlineSchema)]));
