import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Either "backlog", "unstarted", "started", or "done". */
export const TypeShortcutStoriesApi = {
  Started: "started",
  Backlog: "backlog",
  Unstarted: "unstarted",
  Done: "done",
} as const;
export type TypeShortcutStoriesApi =
  | (typeof TypeShortcutStoriesApi)[keyof typeof TypeShortcutStoriesApi]
  | (string & {});

export const typeShortcutStoriesApiSchema: EnumSchema<TypeShortcutStoriesApi> =
  s.enumOf<TypeShortcutStoriesApi>(TypeShortcutStoriesApi);
