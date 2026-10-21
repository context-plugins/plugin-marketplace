import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Lookup1 = {
  /** Unique identifier (file name) of the lookup to deploy. */
  file: string;
  /** Version of the lookup file to deploy. */
  version: string;
};

export const lookup1Schema: Schema<Lookup1> = s.object<Lookup1>({
  file: s.string(),
  version: s.string(),
});
