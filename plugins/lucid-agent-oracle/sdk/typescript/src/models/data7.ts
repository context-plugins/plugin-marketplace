import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checksSchema, type Checks } from "./checks.js";
import { publicationSchema, type Publication } from "./publication.js";

export type Data7 = {
  valid: boolean;
  checks: Checks;
  publication: Publication;
};

export const data7Schema: Schema<Data7> = s.object<Data7>({
  valid: s.boolean(),
  checks: checksSchema,
  publication: publicationSchema,
});
