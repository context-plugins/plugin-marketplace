import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Button, buttonSchema } from "./button.js";
import { stepSchema, type Step } from "./unions/step.js";

export type DragRequest = {
  path: number[];
  /** @default Button.Left */
  button?: Button;
  /** Optional step size for drag movements. If not provided, movement will be continuous. */
  step?: Step;
};

export const dragRequestSchema: Schema<DragRequest> = s.object<DragRequest>({
  path: s.array(s.int()),
  button: s.defaulted(buttonSchema, Button.Left),
  step: s.optional(s.lazy(() => stepSchema)),
});
