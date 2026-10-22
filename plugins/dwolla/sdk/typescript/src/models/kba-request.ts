import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { answer2Schema, type Answer2 } from "./answer2.js";

export type KbaRequest = {
  answers: Answer2[];
};

export const kbaRequestSchema: Schema<KbaRequest> = s.object<KbaRequest>({
  answers: s.array(s.lazy(() => answer2Schema)),
});
