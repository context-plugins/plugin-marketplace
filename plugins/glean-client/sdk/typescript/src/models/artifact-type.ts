import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the Artifact */
export const ArtifactType = {
  Paper: "PAPER",
  Agent: "AGENT",
  Message: "MESSAGE",
  Email: "EMAIL",
  HtmlCode: "HTML_CODE",
  Slide: "SLIDE",
} as const;
export type ArtifactType = (typeof ArtifactType)[keyof typeof ArtifactType] | (string & {});

export const artifactTypeSchema: EnumSchema<ArtifactType> = s.enumOf<ArtifactType>(ArtifactType);
