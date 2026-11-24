import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityTypeLushaWebhooksApi = {
  Contact: "contact",
  Company: "company",
} as const;
export type EntityTypeLushaWebhooksApi =
  | (typeof EntityTypeLushaWebhooksApi)[keyof typeof EntityTypeLushaWebhooksApi]
  | (string & {});

export const entityTypeLushaWebhooksApiSchema: EnumSchema<EntityTypeLushaWebhooksApi> =
  s.enumOf<EntityTypeLushaWebhooksApi>(EntityTypeLushaWebhooksApi);
