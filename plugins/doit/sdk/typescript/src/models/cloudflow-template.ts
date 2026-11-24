import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A read-only CloudFlow template (blueprint). Use `POST /flows` with `templateId` to create a new
 * flow initialised from this template.
 */
export type CloudflowTemplate = {
  /** Unique identifier of the template. */
  id: string;
  /** Human-readable display name of the template. */
  name: string;
  /** Short summary of what the template does and which use case it addresses. */
  description?: string;
  /**
   * Step-by-step operator guidance for configuring a flow created from this template. `null` when
   * no instructions have been authored.
   */
  instructions?: string | null;
  /** ISO 8601 (UTC) creation timestamp. */
  createTime: Date;
  /** ISO 8601 (UTC) last-modified timestamp. `null` if never modified. */
  updateTime?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowTemplateSchema: Schema<CloudflowTemplate> = s.object<CloudflowTemplate>(
  {
    id: s.string(),
    name: s.string(),
    description: s.optional(s.string()),
    instructions: s.optionalNullable(s.string()),
    createTime: s.dateTime(),
    updateTime: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
