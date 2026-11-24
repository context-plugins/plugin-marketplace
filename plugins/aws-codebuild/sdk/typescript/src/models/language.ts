import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The programming language for the Docker images. */
export const Language = {
  Java: "JAVA",
  Python: "PYTHON",
  NodeJs: "NODE_JS",
  Ruby: "RUBY",
  Golang: "GOLANG",
  Docker: "DOCKER",
  Android: "ANDROID",
  Dotnet: "DOTNET",
  Base: "BASE",
  Php: "PHP",
} as const;
export type Language = (typeof Language)[keyof typeof Language] | (string & {});

export const languageSchema: EnumSchema<Language> = s.enumOf<Language>(Language);
