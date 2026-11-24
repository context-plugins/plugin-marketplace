import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorSchema, type Color } from "./color.js";
import { customFieldCompactSchema, type CustomFieldCompact } from "./custom-field-compact.js";
import {
  customFieldSettingResponseSchema,
  type CustomFieldSettingResponse,
} from "./custom-field-setting-response.js";
import { statusUpdateCompactSchema, type StatusUpdateCompact } from "./status-update-compact.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";
import { workspaceCompactSchema, type WorkspaceCompact } from "./workspace-compact.js";

export type PortfolioResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the portfolio. */
  name?: string;
  /** Color of the portfolio. */
  color?: Color;
  /** The time at which this resource was created. */
  createdAt?: Date;
  createdBy?: UserCompact;
  /** Array of custom field settings applied to the portfolio. */
  customFieldSettings?: CustomFieldSettingResponse[];
  /** The latest `status_update` posted to this portfolio. */
  currentStatusUpdate?: StatusUpdateCompact;
  /** The localized day on which this portfolio is due. This takes a date with format YYYY-MM-DD. */
  dueOn?: Date | null;
  /** Array of Custom Fields. */
  customFields?: CustomFieldCompact[];
  members?: UserCompact[];
  owner?: UserCompact;
  /**
   * The day on which work for this portfolio begins, or null if the portfolio has no start date.
   * This takes a date with `YYYY-MM-DD` format. *Note: `due_on` must be present in the request when
   * setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be
   * the same date.*
   */
  startOn?: string | null;
  workspace?: WorkspaceCompact;
  /** A url that points directly to the object within Asana. */
  permalinkUrl?: string;
  /** True if the portfolio is public to its workspace members. */
  public?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfolioResponseSchema: Schema<PortfolioResponse> = s.object<PortfolioResponse>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    color: s.optional(s.lazy(() => colorSchema)),
    createdAt: s.optional(s.dateTime()),
    createdBy: s.optional(s.lazy(() => userCompactSchema)),
    customFieldSettings: s.optional(s.array(s.lazy(() => customFieldSettingResponseSchema))),
    currentStatusUpdate: s.optional(s.lazy(() => statusUpdateCompactSchema)),
    dueOn: s.optionalNullable(s.dateTime()),
    customFields: s.optional(s.array(s.lazy(() => customFieldCompactSchema))),
    members: s.optional(s.array(s.lazy(() => userCompactSchema))),
    owner: s.optional(s.lazy(() => userCompactSchema)),
    startOn: s.optionalNullable(s.dateOnly()),
    workspace: s.optional(s.lazy(() => workspaceCompactSchema)),
    permalinkUrl: s.optional(s.string()),
    public: s.optional(s.boolean()),
    _keysMap: {
      resourceType: "resource_type",
      createdAt: "created_at",
      createdBy: "created_by",
      customFieldSettings: "custom_field_settings",
      currentStatusUpdate: "current_status_update",
      dueOn: "due_on",
      customFields: "custom_fields",
      startOn: "start_on",
      permalinkUrl: "permalink_url",
    },
  },
  { additionalProperties: s.json() },
);
