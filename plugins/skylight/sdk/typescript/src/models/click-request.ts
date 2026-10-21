import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Button, buttonSchema } from "./button.js";
import { xSchema, type X } from "./unions/x.js";
import { ySchema, type Y } from "./unions/y.js";

export type ClickRequest = {
  x?: X;
  y?: Y;
  /** @default Button.Left */
  button?: Button;
  /** @default 1 */
  clicks?: number;
};

export const clickRequestSchema: Schema<ClickRequest> = s.object<ClickRequest>({
  x: s.optional(s.lazy(() => xSchema)),
  y: s.optional(s.lazy(() => ySchema)),
  button: s.defaulted(buttonSchema, Button.Left),
  clicks: s.defaulted(s.int(), 1),
});
