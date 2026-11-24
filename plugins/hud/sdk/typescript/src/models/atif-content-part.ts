import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeHudPlatformJobsApiSchema, type TypeHudPlatformJobsApi } from "./type-hud-platform-jobs-api.js";
import { source11InternalSchema, source11Schema, type Source11 } from "./unions/source11.js";
import { textSchema, type Text } from "./unions/text.js";

export type AtifContentPart = {
  type: TypeHudPlatformJobsApi;
  text?: Text;
  source?: Source11;
};

const atifContentPartProperties: s.Shape<AtifContentPart> = {
  type: typeHudPlatformJobsApiSchema,
  text: s.optional(s.lazy(() => textSchema)),
  source: s.optional(s.lazy(() => source11InternalSchema)),
};

export const atifContentPartInternalSchema: Schema<AtifContentPart> =
  s.object<AtifContentPart>(atifContentPartProperties);

export const atifContentPartSchema: Schema<AtifContentPart> = s.lazySchema(() =>
  s.object<AtifContentPart>({
    ...atifContentPartProperties,
    source: s.optional(s.lazy(() => source11Schema)),
  }),
);
