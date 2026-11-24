import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Named group of news source domains for filtering search and monitors. */
export type SourceGroupDto = {
  /** Numeric identifier for the source group. */
  id?: number | null;
  /** Date and time the source group was created, in ISO 8601 format. */
  createdAt?: Date | null;
  /** Date and time the source group was last updated, in ISO 8601 format. */
  updatedAt?: Date | null;
  /** Unique slug name for the source group. */
  name?: string | null;
  /** Human-readable display name. */
  displayName?: string | null;
  /** Optional description of the source group. */
  description?: string | null;
  /** Publisher domains included in the group. */
  domains?: string[] | null;
  /** Owning organization ID when the source group is private. */
  organizationId?: number | null;
  /** Whether the source group is publicly visible. */
  visible?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceGroupDtoSchema: Schema<SourceGroupDto> = s.object<SourceGroupDto>(
  {
    id: s.optionalNullable(s.int()),
    createdAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.optionalNullable(s.dateTime()),
    name: s.optionalNullable(s.string()),
    displayName: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    domains: s.optionalNullable(s.array(s.string())),
    organizationId: s.optionalNullable(s.int()),
    visible: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
