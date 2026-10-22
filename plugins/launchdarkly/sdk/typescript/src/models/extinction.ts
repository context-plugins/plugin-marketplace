import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Extinction = {
  /** The identifier for the revision where flag became extinct. For example, a commit SHA. */
  revision: string;
  /** Description of the extinction. For example, the commit message for the revision. */
  message: string;
  time: number;
  /** The feature flag key */
  flagKey: string;
  /** The project key */
  projKey: string;
};

export const extinctionSchema: Schema<Extinction> = s.object<Extinction>({
  revision: s.string(),
  message: s.string(),
  time: s.int(),
  flagKey: s.string(),
  projKey: s.string(),
});
