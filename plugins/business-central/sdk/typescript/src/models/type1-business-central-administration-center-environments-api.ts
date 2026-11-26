import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of environment to create */
export const Type1BusinessCentralAdministrationCenterEnvironmentsApi = {
  Production: "Production",
  Sandbox: "Sandbox",
} as const;
export type Type1BusinessCentralAdministrationCenterEnvironmentsApi =
  | (typeof Type1BusinessCentralAdministrationCenterEnvironmentsApi)[keyof typeof Type1BusinessCentralAdministrationCenterEnvironmentsApi]
  | (string & {});

export const type1BusinessCentralAdministrationCenterEnvironmentsApiSchema: EnumSchema<Type1BusinessCentralAdministrationCenterEnvironmentsApi> =
  s.enumOf<Type1BusinessCentralAdministrationCenterEnvironmentsApi>(
    Type1BusinessCentralAdministrationCenterEnvironmentsApi,
  );
