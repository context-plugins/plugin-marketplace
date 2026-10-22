import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { expiredKbaSessionErrorSchema, type ExpiredKbaSessionError } from "../expired-kba-session-error.js";
import { forbiddenErrorSchema, type ForbiddenError } from "../forbidden-error.js";
import { invalidKbaSessionErrorSchema, type InvalidKbaSessionError } from "../invalid-kba-session-error.js";

export type KbaResponse2 = ForbiddenError | InvalidKbaSessionError | ExpiredKbaSessionError;

export const kbaResponse2Schema: Schema<KbaResponse2> = s.of<KbaResponse2>(
  s.union([
    s.lazy(() => forbiddenErrorSchema),
    s.lazy(() => invalidKbaSessionErrorSchema),
    s.lazy(() => expiredKbaSessionErrorSchema),
  ]),
);
