import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 1 = Default 3 = Template1 5 = Template2 7 = Template3 9 = Template4 11 = Template5 13 =
 * TemplateA5 15 = Template9x11withOriginal 17 = Template8 101 = NativeDefault 103 = Native1 105 =
 * Native3 107 = Native5 109 = Native7 111 = Native9 113 = Native11 115 = Native13 201 = Thermal1
 * 203 = Thermal2 205 = SocialSlip 301 = ShortCA1 303 = ShortCA2 305 = ShortCA3
 */
export const DocumentTemplates = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
  _13: 13,
  _15: 15,
  _17: 17,
  _101: 101,
  _103: 103,
  _105: 105,
  _107: 107,
  _109: 109,
  _111: 111,
  _113: 113,
  _115: 115,
  _201: 201,
  _203: 203,
  _205: 205,
  _301: 301,
  _303: 303,
  _305: 305,
} as const;
export type DocumentTemplates = (typeof DocumentTemplates)[keyof typeof DocumentTemplates] | (number & {});

export const documentTemplatesSchema: EnumSchema<DocumentTemplates> =
  s.enumOf<DocumentTemplates>(DocumentTemplates);
