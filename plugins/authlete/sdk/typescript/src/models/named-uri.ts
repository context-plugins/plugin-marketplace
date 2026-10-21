import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NamedUri = {
  name?: string;
  uri?: string;
};

export const namedUriSchema: Schema<NamedUri> = s.object<NamedUri>({
  name: s.optional(s.string()),
  uri: s.optional(s.string()),
});
