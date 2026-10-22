import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A cursor to fetch the next page. Null when there are no more results. */
export type NextPage = string;

export const nextPageSchema: Schema<NextPage> = s.of<NextPage>(s.union([s.string()]));
