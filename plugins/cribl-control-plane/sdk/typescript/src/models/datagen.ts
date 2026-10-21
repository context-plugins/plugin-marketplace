import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Datagen = {
  /** Data Generator File Name */
  sample: string;
  /** Maximum number of events to generate per second per Worker Node. Defaults to 10. */
  eventsPerSec: number;
};

export const datagenSchema: Schema<Datagen> = s.object<Datagen>({
  sample: s.string(),
  eventsPerSec: s.float64(),
});
