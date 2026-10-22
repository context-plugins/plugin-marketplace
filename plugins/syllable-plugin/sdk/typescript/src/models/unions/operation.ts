import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * What produced this row: create, update, delete, restore, bulk_load. Null for rows created before
 * this field existed.
 */
export type Operation = string;

export const operationSchema: Schema<Operation> = s.of<Operation>(s.union([s.string()]));
