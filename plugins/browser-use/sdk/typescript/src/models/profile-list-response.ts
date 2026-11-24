import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { profileViewSchema, type ProfileView } from "./profile-view.js";

/** Response model for paginated profile list requests. */
export type ProfileListResponse = {
  /** List of profile views for the current page */
  items: ProfileView[];
  /** Total number of items in the list */
  totalItems: number;
  /** Page number */
  pageNumber: number;
  /** Number of items per page */
  pageSize: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileListResponseSchema: Schema<ProfileListResponse> = s.object<ProfileListResponse>(
  {
    items: s.array(s.lazy(() => profileViewSchema)),
    totalItems: s.int(),
    pageNumber: s.int(),
    pageSize: s.int(),
  },
  { additionalProperties: s.json() },
);
