import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The service this Identity is for. */
export const TypeShortcutSearchApi = {
  Slack: "slack",
  Github: "github",
  Gitlab: "gitlab",
  Bitbucket: "bitbucket",
} as const;
export type TypeShortcutSearchApi =
  | (typeof TypeShortcutSearchApi)[keyof typeof TypeShortcutSearchApi]
  | (string & {});

export const typeShortcutSearchApiSchema: EnumSchema<TypeShortcutSearchApi> =
  s.enumOf<TypeShortcutSearchApi>(TypeShortcutSearchApi);
