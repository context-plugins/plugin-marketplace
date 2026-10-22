import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhaseInfo = {
  /** The phase ID */
  id: string;
  /** The release phase name */
  name: string;
  /** The number of active releases in this phase */
  releaseCount: number;
};

export const phaseInfoSchema: Schema<PhaseInfo> = s.object<PhaseInfo>({
  id: s.string(),
  name: s.string(),
  releaseCount: s.int(),
  _keysMap: {
    id: "_id",
  },
});
