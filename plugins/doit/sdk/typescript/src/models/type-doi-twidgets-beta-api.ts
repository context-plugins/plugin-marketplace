import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the widget is supplied by DoiT or defined by a customer. */
export const TypeDoiTWidgetsBetaApi = {
  Custom: "custom",
  Preset: "preset",
} as const;
export type TypeDoiTWidgetsBetaApi =
  | (typeof TypeDoiTWidgetsBetaApi)[keyof typeof TypeDoiTWidgetsBetaApi]
  | (string & {});

export const typeDoiTWidgetsBetaApiSchema: EnumSchema<TypeDoiTWidgetsBetaApi> =
  s.enumOf<TypeDoiTWidgetsBetaApi>(TypeDoiTWidgetsBetaApi);
