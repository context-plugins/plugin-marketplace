import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { getShortcutRequestSchema, type GetShortcutRequest } from "../get-shortcut-request.js";
import { userGeneratedContentIdSchema, type UserGeneratedContentId } from "../user-generated-content-id.js";

export type GetShortcutRequest1 = UserGeneratedContentId | GetShortcutRequest;

export const getShortcutRequest1Schema: Schema<GetShortcutRequest1> = s.of<GetShortcutRequest1>(
  s.union([s.lazy(() => userGeneratedContentIdSchema), s.lazy(() => getShortcutRequestSchema)]),
);
