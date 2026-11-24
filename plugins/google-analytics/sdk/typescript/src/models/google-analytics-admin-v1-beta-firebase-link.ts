import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A link between a Google Analytics property and a Firebase project. */
export type GoogleAnalyticsAdminV1BetaFirebaseLink = {
  /** Output only. Time when this FirebaseLink was originally created. */
  createTime?: string;
  /** Identifier. Example format: properties/1234/firebaseLinks/5678 */
  name?: string;
  /**
   * Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this
   * resource name using either a project number or project ID. Once this resource has been created,
   * returned FirebaseLinks will always have a project_name that contains a project number. Format:
   * 'projects/{project number}' Example: 'projects/1234'
   */
  project?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaFirebaseLinkSchema: Schema<GoogleAnalyticsAdminV1BetaFirebaseLink> =
  s.object<GoogleAnalyticsAdminV1BetaFirebaseLink>(
    {
      createTime: s.optional(s.string()),
      name: s.optional(s.string()),
      project: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
