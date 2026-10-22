import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  directoryMemberPropertiesSchema,
  type DirectoryMemberProperties,
} from "../directory-member-properties.js";

/** Fields to include in response */
export type Fields23 = DirectoryMemberProperties[];

export const fields23Schema: Schema<Fields23> = s.of<Fields23>(
  s.union([s.array(s.lazy(() => directoryMemberPropertiesSchema))]),
);
