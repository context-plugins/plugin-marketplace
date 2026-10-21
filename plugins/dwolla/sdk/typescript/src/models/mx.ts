import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Mx = {
  /** The MX connection token for the available connection */
  availableConnectionToken: string;
};

export const mxSchema: Schema<Mx> = s.object<Mx>({
  availableConnectionToken: s.string(),
});
