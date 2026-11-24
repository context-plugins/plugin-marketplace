import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The VCS provider for the Repository. */
export const TypeShortcutRepositoriesApi = {
  Github: "github",
  Gitlab: "gitlab",
  Bitbucket: "bitbucket",
} as const;
export type TypeShortcutRepositoriesApi =
  | (typeof TypeShortcutRepositoriesApi)[keyof typeof TypeShortcutRepositoriesApi]
  | (string & {});

export const typeShortcutRepositoriesApiSchema: EnumSchema<TypeShortcutRepositoriesApi> =
  s.enumOf<TypeShortcutRepositoriesApi>(TypeShortcutRepositoriesApi);
