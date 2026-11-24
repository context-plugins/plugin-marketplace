import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessLevelSchema, type AccessLevel } from "./access-level.js";

export type FoldersRequest1 = {
  /** The name of the folder. */
  name?: string;
  /** The access level of the folder within the workspace. */
  accessLevel?: AccessLevel | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const foldersRequest1Properties: s.Shape<FoldersRequest1> = {
  name: s.optional(s.string()),
  accessLevel: s.optionalNullable(s.lazy(() => accessLevelSchema)),
};

export const foldersRequest1InternalSchema: Schema<FoldersRequest1> = s.object<FoldersRequest1>(
  foldersRequest1Properties,
  { additionalProperties: s.json() },
);

export const foldersRequest1Schema: Schema<FoldersRequest1> = s.lazySchema(() =>
  s.object<FoldersRequest1>(
    {
      ...foldersRequest1Properties,
      name: s.optional(s.string().check(s.minLength(3), s.maxLength(190))),
    },
    { additionalProperties: s.json() },
  ),
);
