import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Source of this client record. */
export const ClientSource = {
  DynamicRegistration: "DYNAMIC_REGISTRATION",
  AutomaticRegistration: "AUTOMATIC_REGISTRATION",
  ExplicitRegistration: "EXPLICIT_REGISTRATION",
  MetadataDocument: "METADATA_DOCUMENT",
  StaticRegistration: "STATIC_REGISTRATION",
} as const;
export type ClientSource = (typeof ClientSource)[keyof typeof ClientSource] | (string & {});

export const clientSourceSchema: EnumSchema<ClientSource> = s.enumOf<ClientSource>(ClientSource);
