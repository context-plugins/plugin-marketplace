import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { blockSchema, type Block } from "../block.js";
import { block1Schema, type Block1 } from "../block1.js";
import { block10Schema, type Block10 } from "../block10.js";
import { block11Schema, type Block11 } from "../block11.js";
import { block12Schema, type Block12 } from "../block12.js";
import { block13Schema, type Block13 } from "../block13.js";
import { block14Schema, type Block14 } from "../block14.js";
import { block15Schema, type Block15 } from "../block15.js";
import { block16Schema, type Block16 } from "../block16.js";
import { block2Schema, type Block2 } from "../block2.js";
import { block3Schema, type Block3 } from "../block3.js";
import { block4Schema, type Block4 } from "../block4.js";
import { block5Schema, type Block5 } from "../block5.js";
import { block6Schema, type Block6 } from "../block6.js";
import { block7Schema, type Block7 } from "../block7.js";
import { block8Schema, type Block8 } from "../block8.js";
import { block9Schema, type Block9 } from "../block9.js";

/** A block in the post content. */
export type Block17 =
  | Block
  | Block1
  | Block2
  | Block3
  | Block4
  | Block5
  | Block6
  | Block7
  | Block8
  | Block9
  | Block10
  | Block11
  | Block12
  | Block13
  | Block14
  | Block15
  | Block16;

export const block17Schema: Schema<Block17> = s.of<Block17>(
  s.union([
    s.lazy(() => blockSchema),
    s.lazy(() => block1Schema),
    s.lazy(() => block2Schema),
    s.lazy(() => block3Schema),
    s.lazy(() => block4Schema),
    s.lazy(() => block5Schema),
    s.lazy(() => block6Schema),
    s.lazy(() => block7Schema),
    s.lazy(() => block8Schema),
    s.lazy(() => block9Schema),
    s.lazy(() => block10Schema),
    s.lazy(() => block11Schema),
    s.lazy(() => block12Schema),
    s.lazy(() => block13Schema),
    s.lazy(() => block14Schema),
    s.lazy(() => block15Schema),
    s.lazy(() => block16Schema),
  ]),
);
