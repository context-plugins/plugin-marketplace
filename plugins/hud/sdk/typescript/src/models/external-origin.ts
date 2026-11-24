import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Where an imported entity comes from: a system and the entity's id in it. */
export type ExternalOrigin = {
  /** A system HUD imports environments and runs from. @default "harbor" */
  system?: "harbor";
  externalId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalOriginSchema: Schema<ExternalOrigin> = s.object<ExternalOrigin>(
  {
    system: s.defaulted(s.literal("harbor"), "harbor"),
    externalId: s.string(),
    _keysMap: {
      externalId: "external_id",
    },
  },
  { additionalProperties: s.json() },
);
