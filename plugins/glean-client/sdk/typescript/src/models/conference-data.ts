import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { providerSchema, type Provider } from "./provider.js";
import { source4Schema, type Source4 } from "./source4.js";

export type ConferenceData = {
  provider: Provider;
  /** A permalink for the conference. */
  uri: string;
  source?: Source4;
};

export const conferenceDataSchema: Schema<ConferenceData> = s.object<ConferenceData>({
  provider: providerSchema,
  uri: s.string(),
  source: s.optional(s.lazy(() => source4Schema)),
});
