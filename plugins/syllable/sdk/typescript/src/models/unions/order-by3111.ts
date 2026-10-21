import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  directoryMemberPropertiesSchema,
  type DirectoryMemberProperties,
} from "../directory-member-properties.js";

/** Field to order results by */
export type OrderBy3111 = DirectoryMemberProperties;

export const orderBy3111Schema: Schema<OrderBy3111> = s.of<OrderBy3111>(
  s.union([s.lazy(() => directoryMemberPropertiesSchema)]),
);
