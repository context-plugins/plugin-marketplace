import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type NoExternalAccess = boolean;

export const noExternalAccessSchema: Schema<NoExternalAccess> = s.of<NoExternalAccess>(
  s.union([s.boolean()]),
);
