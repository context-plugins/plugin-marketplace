import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { onboarding1Schema, type Onboarding1 } from "./unions/onboarding1.js";

export type Metadata = {
  onboarding?: Record<string, Onboarding1>;
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>({
  onboarding: s.optional(
    s.record(
      s.string(),
      s.lazy(() => onboarding1Schema),
    ),
  ),
});
