import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OPTIONAL. You can create an additional document to display open api intro. */
export const ShouldCreateIntro = {
  True: "true",
  False: "false",
} as const;
export type ShouldCreateIntro = (typeof ShouldCreateIntro)[keyof typeof ShouldCreateIntro] | (string & {});

export const shouldCreateIntroSchema: EnumSchema<ShouldCreateIntro> =
  s.enumOf<ShouldCreateIntro>(ShouldCreateIntro);
