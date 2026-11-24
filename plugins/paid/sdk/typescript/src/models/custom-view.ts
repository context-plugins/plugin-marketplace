import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customViewDetailScopeSchema, type CustomViewDetailScope } from "./custom-view-detail-scope.js";
import { customViewStatusSchema, type CustomViewStatus } from "./custom-view-status.js";

export type CustomView = {
  /** Stable public identifier used in preview/embed URLs. */
  displayId: string;
  name: string;
  /**
   * A view is DRAFT until explicitly published. For customer-scoped views, only PUBLISHED views are
   * embeddable and served to end-customers; a DRAFT is not. For organization-scoped views,
   * publishing is only a 'ready to use' marker — both DRAFT and PUBLISHED are visible to your
   * organization's members in Paid (publishing does not change who in the org can see it), and
   * neither is ever embeddable to an end-customer.
   */
  status: CustomViewStatus;
  /**
   * Absolute URL to open this view in the Paid app for preview. Surface it to the user after
   * creating or publishing a view. Null when the app URL is not configured.
   */
  previewUrl: string | null;
  /**
   * 'customer': data is scoped to one viewing customer and the view is embeddable per-customer.
   * 'organization': data is org-wide and the view is internal-only.
   */
  scope: CustomViewDetailScope;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customViewProperties: s.Shape<CustomView> = {
  displayId: s.string(),
  name: s.string(),
  status: customViewStatusSchema,
  previewUrl: s.nullable(s.string()),
  scope: customViewDetailScopeSchema,
};

export const customViewInternalSchema: Schema<CustomView> = s.object<CustomView>(customViewProperties, {
  additionalProperties: s.json(),
});

export const customViewSchema: Schema<CustomView> = s.lazySchema(() =>
  s.object<CustomView>(
    {
      ...customViewProperties,
      previewUrl: s.nullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
