import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessLevelSchema, type AccessLevel } from "./access-level.js";

export type FoldersRequest = {
  /** The name of the folder. */
  name: string;
  /** The access level of the folder within the workspace. */
  accessLevel?: AccessLevel | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const foldersRequestProperties: s.Shape<FoldersRequest> = {
  name: s.string(),
  accessLevel: s.optionalNullable(s.lazy(() => accessLevelSchema)),
};

export const foldersRequestInternalSchema: Schema<FoldersRequest> = s.object<FoldersRequest>(
  foldersRequestProperties,
  { additionalProperties: s.json() },
);

export const foldersRequestSchema: Schema<FoldersRequest> = s.lazySchema(() =>
  s.object<FoldersRequest>(
    {
      ...foldersRequestProperties,
      name: s.string().check(s.minLength(3), s.maxLength(190)),
    },
    { additionalProperties: s.json() },
  ),
);
