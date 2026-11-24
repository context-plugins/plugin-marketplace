import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = EmpWithOutOT 3 = EmpWithOT 5 = EmpByDayHour 7 = Owner */
export const EmployeeTypes = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
} as const;
export type EmployeeTypes = (typeof EmployeeTypes)[keyof typeof EmployeeTypes] | (number & {});

export const employeeTypesSchema: EnumSchema<EmployeeTypes> = s.enumOf<EmployeeTypes>(EmployeeTypes);
