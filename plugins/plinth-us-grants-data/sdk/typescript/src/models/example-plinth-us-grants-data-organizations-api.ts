import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExamplePlinthUsGrantsDataOrganizationsApi = {
  _1: "1",
  Candid: "candid",
  NotFound: "not_found",
  Taster: "taster",
  List: "list",
} as const;
export type ExamplePlinthUsGrantsDataOrganizationsApi =
  | (typeof ExamplePlinthUsGrantsDataOrganizationsApi)[keyof typeof ExamplePlinthUsGrantsDataOrganizationsApi]
  | (string & {});

export const examplePlinthUsGrantsDataOrganizationsApiSchema: EnumSchema<ExamplePlinthUsGrantsDataOrganizationsApi> =
  s.enumOf<ExamplePlinthUsGrantsDataOrganizationsApi>(ExamplePlinthUsGrantsDataOrganizationsApi);
