import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeDeliverdDevAudiencesApi = {
  Owner: "owner",
  User: "user",
  Workspace: "workspace",
  Group: "group",
  Org: "org",
  Guest: "guest",
  Link: "link",
  Public: "public",
  Domain: "domain",
} as const;
export type TypeDeliverdDevAudiencesApi =
  | (typeof TypeDeliverdDevAudiencesApi)[keyof typeof TypeDeliverdDevAudiencesApi]
  | (string & {});

export const typeDeliverdDevAudiencesApiSchema: EnumSchema<TypeDeliverdDevAudiencesApi> =
  s.enumOf<TypeDeliverdDevAudiencesApi>(TypeDeliverdDevAudiencesApi);
