import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MouseMoveRequest = {
  x: number;
  y: number;
};

export const mouseMoveRequestSchema: Schema<MouseMoveRequest> = s.object<MouseMoveRequest>({
  x: s.int(),
  y: s.int(),
});
