import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { instrumentTypeSchema, type InstrumentType } from "../instrument-type.js";

/** The name of the instrument used to process the transaction. */
export type InstrumentType1Model = InstrumentType;

export const instrumentType1ModelSchema: Schema<InstrumentType1Model> = s.of<InstrumentType1Model>(
  s.union([s.lazy(() => instrumentTypeSchema)]),
);
