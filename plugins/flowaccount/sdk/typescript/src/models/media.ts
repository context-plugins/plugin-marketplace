import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";
import { galleryInternalSchema, gallerySchema, type Gallery } from "./gallery.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

export type Media = {
  id?: number;
  url: string;
  description?: string | null;
  orderNumber?: number | null;
  createdOn?: Date | null;
  isDisplay?: boolean;
  isDeleted?: boolean;
  galleryId?: number | null;
  mediaType?: number;
  companyId?: number;
  userId?: number;
  path?: string | null;
  company?: Company;
  gallery?: Gallery;
  user?: User;
};

const mediaProperties: s.Shape<Media> = {
  id: s.optional(s.int()),
  url: s.string(),
  description: s.optionalNullable(s.string()),
  orderNumber: s.optionalNullable(s.int()),
  createdOn: s.optionalNullable(s.dateTime()),
  isDisplay: s.optional(s.boolean()),
  isDeleted: s.optional(s.boolean()),
  galleryId: s.optionalNullable(s.int()),
  mediaType: s.optional(s.int()),
  companyId: s.optional(s.int()),
  userId: s.optional(s.int()),
  path: s.optionalNullable(s.string()),
  company: s.optional(s.lazy(() => companyInternalSchema)),
  gallery: s.optional(s.lazy(() => galleryInternalSchema)),
  user: s.optional(s.lazy(() => userInternalSchema)),
};

export const mediaInternalSchema: Schema<Media> = s.object<Media>(mediaProperties);

export const mediaSchema: Schema<Media> = s.lazySchema(() =>
  s.object<Media>({
    ...mediaProperties,
    url: s.string().check(s.minLength(0), s.maxLength(255)),
    description: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(255))),
    company: s.optional(s.lazy(() => companySchema)),
    gallery: s.optional(s.lazy(() => gallerySchema)),
    user: s.optional(s.lazy(() => userSchema)),
  }),
);
