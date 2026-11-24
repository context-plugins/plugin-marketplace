import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeHudPlatformRolloutsApi = {
  Claude: "claude",
  ClaudeCli: "claude_cli",
  CodexCli: "codex_cli",
  Openai: "openai",
  Gemini: "gemini",
  OpenaiCompatible: "openai_compatible",
} as const;
export type TypeHudPlatformRolloutsApi =
  | (typeof TypeHudPlatformRolloutsApi)[keyof typeof TypeHudPlatformRolloutsApi]
  | (string & {});

export const typeHudPlatformRolloutsApiSchema: EnumSchema<TypeHudPlatformRolloutsApi> =
  s.enumOf<TypeHudPlatformRolloutsApi>(TypeHudPlatformRolloutsApi);
