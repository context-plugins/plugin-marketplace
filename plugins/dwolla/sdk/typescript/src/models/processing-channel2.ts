import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination10Schema, type Destination10 } from "./destination10.js";

export type ProcessingChannel2 = {
  destination?: Destination10;
};

export const processingChannel2Schema: Schema<ProcessingChannel2> = s.object<ProcessingChannel2>({
  destination: s.optional(s.lazy(() => destination10Schema)),
});
