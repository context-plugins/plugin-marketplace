import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ugcTypeSchema, type UgcType } from "./ugc-type.js";

export type FavoriteInfo = {
  ugcType?: UgcType;
  /** Opaque id of the UGC. */
  id?: string;
  /** Number of users this object has been favorited by. */
  count?: number;
  /** If the requesting user has favorited this object. */
  favoritedByUser?: boolean;
};

export const favoriteInfoSchema: Schema<FavoriteInfo> = s.object<FavoriteInfo>({
  ugcType: s.optional(s.lazy(() => ugcTypeSchema)),
  id: s.optional(s.string()),
  count: s.optional(s.int()),
  favoritedByUser: s.optional(s.boolean()),
});
