import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { signature1Schema, type Signature1 } from "../signature1.js";
import { signature11Schema, type Signature11 } from "../signature11.js";

export type Signature12 = Signature1 | Signature11;

export const signature12Schema: Schema<Signature12> = s.of<Signature12>(
  s.union([s.lazy(() => signature1Schema), s.lazy(() => signature11Schema)]),
);
