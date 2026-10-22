import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type User8 = {
  sourcedId: string;
};

export const user8Schema: Schema<User8> = s.object<User8>({
  sourcedId: s.string(),
});
