import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueUiPathOrchestratorPackagesApi = {
  /** Package ID (name and version combined) */
  id?: string;
  /** Package display title */
  title?: string;
  /** Semantic version of the package */
  version?: string;
  /** Package description from the NuGet metadata */
  description?: string;
  /** ISO 8601 timestamp when the package was published */
  published?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueUiPathOrchestratorPackagesApiSchema: Schema<ValueUiPathOrchestratorPackagesApi> =
  s.object<ValueUiPathOrchestratorPackagesApi>(
    {
      id: s.optional(s.string()),
      title: s.optional(s.string()),
      version: s.optional(s.string()),
      description: s.optional(s.string()),
      published: s.optional(s.dateTime()),
      _keysMap: {
        id: "Id",
        title: "Title",
        version: "Version",
        description: "Description",
        published: "Published",
      },
    },
    { additionalProperties: s.json() },
  );
