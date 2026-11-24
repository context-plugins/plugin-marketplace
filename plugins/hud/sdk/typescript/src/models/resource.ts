import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { annotations1InternalSchema, annotations1Schema, type Annotations1 } from "./unions/annotations1.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { iconsSchema, type Icons } from "./unions/icons.js";
import { metaSchema, type Meta } from "./unions/meta.js";
import { mimetypeSchema, type Mimetype } from "./unions/mimetype.js";
import { sizeSchema, type Size } from "./unions/size.js";
import { titleSchema, type Title } from "./unions/title.js";

/** A known resource that the server is capable of reading. */
export type Resource = {
  name: string;
  title?: Title;
  uri: string;
  description?: Description;
  mimeType?: Mimetype;
  size?: Size;
  icons?: Icons;
  annotations?: Annotations1;
  meta?: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const resourceProperties: s.Shape<Resource> = {
  name: s.string(),
  title: s.optional(s.lazy(() => titleSchema)),
  uri: s.string(),
  description: s.optional(s.lazy(() => descriptionSchema)),
  mimeType: s.optional(s.lazy(() => mimetypeSchema)),
  size: s.optional(s.lazy(() => sizeSchema)),
  icons: s.optional(s.lazy(() => iconsSchema)),
  annotations: s.optional(s.lazy(() => annotations1InternalSchema)),
  meta: s.optional(s.lazy(() => metaSchema)),
  _keysMap: {
    meta: "_meta",
  },
};

export const resourceInternalSchema: Schema<Resource> = s.object<Resource>(resourceProperties, {
  additionalProperties: s.json(),
});

export const resourceSchema: Schema<Resource> = s.lazySchema(() =>
  s.object<Resource>(
    {
      ...resourceProperties,
      uri: s.string().check(s.minLength(1), s.url()),
      annotations: s.optional(s.lazy(() => annotations1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
