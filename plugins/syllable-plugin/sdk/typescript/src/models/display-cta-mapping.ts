import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Icon, iconSchema } from "./icon.js";
import { actionidSchema, type Actionid } from "./unions/actionid.js";
import { linkSchema, type Link } from "./unions/link.js";
import { messageSchema, type Message } from "./unions/message.js";
import { textSchema, type Text } from "./unions/text.js";

export type DisplayCtaMapping = {
  text?: Text;
  /** @default Icon.Arrow */
  icon?: Icon;
  link?: Link;
  actionId?: Actionid;
  message?: Message;
};

export const displayCtaMappingSchema: Schema<DisplayCtaMapping> = s.object<DisplayCtaMapping>({
  text: s.optional(s.lazy(() => textSchema)),
  icon: s.defaulted(iconSchema, Icon.Arrow),
  link: s.optional(s.lazy(() => linkSchema)),
  actionId: s.optional(s.lazy(() => actionidSchema)),
  message: s.optional(s.lazy(() => messageSchema)),
});
