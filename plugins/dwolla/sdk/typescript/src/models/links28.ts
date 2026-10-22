import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Links28 = {
  answer: HalLink;
};

export const links28Schema: Schema<Links28> = s.object<Links28>({
  answer: halLinkSchema,
});
