import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * `ApiDoc` represents an API catalog item. Catalog items are used in two ways in a portal: - Users
 * can browse and interact with a visual representation of the API documentation - The
 * `api_product_name` field provides a link to a backing [API product]
 * (/apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts). Through this link, portal
 * users can create and manage developer apps linked to one or more API products.
 */
export type GoogleCloudApigeeV1ApiDoc = {
  /** Output only. The ID of the parent portal. */
  siteId?: string;
  /**
   * Optional. Boolean flag that manages user access to the catalog item. When true, the catalog
   * item has public visibility and can be viewed anonymously; otherwise, only registered users may
   * view it. Note: when the parent portal is enrolled in the [audience management
   * feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature),
   * and this flag is set to false, visibility is set to an indeterminate state and must be
   * explicitly specified in the management UI (see [Manage the visibility of an API in your
   * portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)).
   * Additionally, when enrolled in the audience management feature, updates to this flag will be
   * ignored as visibility permissions must be updated in the management UI.
   */
  anonAllowed?: boolean;
  /**
   * Optional. DEPRECATED: DO NOT USE
   *
   * @deprecated
   */
  specId?: string;
  /**
   * Optional. DEPRECATED: manage documentation through the `getDocumentation` and
   * `updateDocumentation` methods
   *
   * @deprecated
   */
  graphqlSchemaDisplayName?: string;
  /**
   * Optional. Denotes whether the catalog item is published to the portal or is in a draft state.
   * When the parent portal is enrolled in the [audience management
   * feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature),
   * the visibility can be set to public on creation by setting the anonAllowed flag to true or
   * further managed in the management UI (see [Manage the visibility of an API in your
   * portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility))
   * before it can be visible to any users. If not enrolled in the audience management feature, the
   * visibility is managed by the `anonAllowed` flag.
   */
  published?: boolean;
  /** Optional. Immutable. DEPRECATED: use the `apiProductName` field instead */
  edgeApiProductName?: string;
  /** Optional. DEPRECATED: use the `published` field instead */
  visibility?: boolean;
  /** Optional. The IDs of the API categories to which this catalog item belongs. */
  categoryIds?: string[];
  /**
   * Optional. Location of the image used for the catalog item in the catalog. This can be either an
   * image with an external URL or a file path for [image files stored in the
   * portal](/apigee/docs/api-platform/publish/portal/portal-files"), for example,
   * `/files/book-tree.jpg`. When specifying the URL of an external image, the image won't be
   * uploaded to your assets; additionally, loading the image in the integrated portal will be
   * subject to its availability, which may be blocked or restricted by [content security
   * policies](/apigee/docs/api-platform/publish/portal/csp). Max length of file path is 2,083
   * characters.
   */
  imageUrl?: string;
  /**
   * Required. The user-facing name of the catalog item. `title` must be a non-empty string with a
   * max length of 255 characters.
   */
  title?: string;
  /**
   * Optional. DEPRECATED: manage documentation through the `getDocumentation` and
   * `updateDocumentation` methods
   *
   * @deprecated
   */
  graphqlEndpointUrl?: string;
  /**
   * Required. Immutable. The `name` field of the associated [API
   * product](/apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts). A portal may
   * have only one catalog item associated with a given API product.
   */
  apiProductName?: string;
  /** Optional. Description of the catalog item. Max length is 10,000 characters. */
  description?: string;
  /**
   * Optional. DEPRECATED: manage documentation through the `getDocumentation` and
   * `updateDocumentation` methods
   *
   * @deprecated
   */
  graphqlSchema?: string;
  /** Output only. Time the catalog item was last modified in milliseconds since epoch. */
  modified?: string;
  /**
   * Optional. Whether a callback URL is required when this catalog item's API product is enabled in
   * a developer app. When true, a portal user will be required to input a URL when managing the app
   * (this is typically used for the app's OAuth flow).
   */
  requireCallbackUrl?: boolean;
  /** Output only. The ID of the catalog item. */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiDocSchema: Schema<GoogleCloudApigeeV1ApiDoc> =
  s.object<GoogleCloudApigeeV1ApiDoc>(
    {
      siteId: s.optional(s.string()),
      anonAllowed: s.optional(s.boolean()),
      specId: s.optional(s.string()),
      graphqlSchemaDisplayName: s.optional(s.string()),
      published: s.optional(s.boolean()),
      edgeApiProductName: s.optional(s.string()),
      visibility: s.optional(s.boolean()),
      categoryIds: s.optional(s.array(s.string())),
      imageUrl: s.optional(s.string()),
      title: s.optional(s.string()),
      graphqlEndpointUrl: s.optional(s.string()),
      apiProductName: s.optional(s.string()),
      description: s.optional(s.string()),
      graphqlSchema: s.optional(s.string()),
      modified: s.optional(s.string()),
      requireCallbackUrl: s.optional(s.boolean()),
      id: s.optional(s.string()),
      _keysMap: {
        edgeApiProductName: "edgeAPIProductName",
      },
    },
    { additionalProperties: s.json() },
  );
