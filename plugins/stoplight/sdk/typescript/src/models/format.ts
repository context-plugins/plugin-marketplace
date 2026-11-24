import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Format = {
  OasJson: "oas.json",
  OasYaml: "oas.yaml",
  Raml08Yaml: "raml08.yaml",
  Raml10Yaml: "raml10.yaml",
  StoplightJson: "stoplight.json",
  StoplightYaml: "stoplight.yaml",
} as const;
export type Format = (typeof Format)[keyof typeof Format] | (string & {});

export const formatSchema: EnumSchema<Format> = s.enumOf<Format>(Format);
