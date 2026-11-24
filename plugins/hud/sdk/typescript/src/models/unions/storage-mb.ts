import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StorageMb = number;

export const storageMbInternalSchema: Schema<StorageMb> = s.of<StorageMb>(s.union([s.int()]));

export const storageMbSchema: Schema<StorageMb> = s.lazySchema(() =>
  s.of<StorageMb>(s.union([s.int().check(s.gt(0))])),
);
