import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Participant = {
  /** Optional domain element identifier */
  domainElementId?: string;
  instruction?: string;
};

export const participantSchema: Schema<Participant> = s.object<Participant>({
  domainElementId: s.optional(s.string()),
  instruction: s.optional(s.string()),
});
