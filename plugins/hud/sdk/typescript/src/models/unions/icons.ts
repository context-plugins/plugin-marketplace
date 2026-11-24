import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { iconSchema, type Icon } from "../icon.js";

export type Icons = Icon[];

export const iconsSchema: Schema<Icons> = s.of<Icons>(s.union([s.array(s.lazy(() => iconSchema))]));
