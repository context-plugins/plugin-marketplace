import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BodyCreateProjectFromFileApiV1TemplatesCreateProjectFromFilePost = {
  name: string;
  workspaceId?: string | null;
  file: Uint8Array;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bodyCreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostSchema: Schema<BodyCreateProjectFromFileApiV1TemplatesCreateProjectFromFilePost> =
  s.object<BodyCreateProjectFromFileApiV1TemplatesCreateProjectFromFilePost>(
    {
      name: s.string(),
      workspaceId: s.optionalNullable(s.string()),
      file: s.bytes(),
      _keysMap: {
        workspaceId: "workspace_id",
      },
    },
    { additionalProperties: s.json() },
  );
