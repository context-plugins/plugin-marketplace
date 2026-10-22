import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  userMessageContentMultiModalSchema,
  type UserMessageContentMultiModal,
} from "./user-message-content-multi-modal.js";

export type Content3 = string | UserMessageContentMultiModal[];

export const content3Schema: Schema<Content3> = s.of<Content3>(
  s.union([s.string(), s.array(s.lazy(() => userMessageContentMultiModalSchema))]),
);
