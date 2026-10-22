import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomMessageProperties = {
  Id: "id",
  Name: "name",
  NameExact: "name_exact",
  Text: "text",
  Label: "label",
  Type: "type",
  UpdatedAt: "updated_at",
  AgentId: "agent_id",
} as const;
export type CustomMessageProperties =
  | (typeof CustomMessageProperties)[keyof typeof CustomMessageProperties]
  | (string & {});

export const customMessagePropertiesSchema: EnumSchema<CustomMessageProperties> =
  s.enumOf<CustomMessageProperties>(CustomMessageProperties);
