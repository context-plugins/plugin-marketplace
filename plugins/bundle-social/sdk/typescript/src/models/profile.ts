import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Profile = {
  description?: string;
};

const profileProperties: s.Shape<Profile> = {
  description: s.optional(s.string()),
};

export const profileInternalSchema: Schema<Profile> = s.object<Profile>(profileProperties);

export const profileSchema: Schema<Profile> = s.lazySchema(() =>
  s.object<Profile>({
    ...profileProperties,
    description: s.optional(s.string().check(s.maxLength(1500))),
  }),
);
