import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FoldersResponse = {
  /** The ID of the deleted folder. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const foldersResponseSchema: Schema<FoldersResponse> = s.object<FoldersResponse>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
