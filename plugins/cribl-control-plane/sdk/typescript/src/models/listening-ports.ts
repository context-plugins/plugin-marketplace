import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Creates events from list of listening ports */
export type ListeningPorts = {
  /** Enabled */
  enable?: boolean;
};

export const listeningPortsSchema: Schema<ListeningPorts> = s.object<ListeningPorts>({
  enable: s.optional(s.boolean()),
});
