import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectImportCreateResponse = {
  /** ID of the project created from the template. */
  projectId: string;
  /** Always `ok` on success. @default "ok" */
  status?: "ok";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectImportCreateResponseSchema: Schema<ProjectImportCreateResponse> =
  s.object<ProjectImportCreateResponse>(
    {
      projectId: s.string(),
      status: s.defaulted(s.literal("ok"), "ok"),
      _keysMap: {
        projectId: "project_id",
      },
    },
    { additionalProperties: s.json() },
  );
