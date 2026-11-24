using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// <c>ApiDoc</c> represents an API catalog item. Catalog items are used in two ways in a portal: - Users can browse and interact with a visual representation of the API documentation - The <c>api_product_name</c> field provides a link to a backing [API product] (/apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts). Through this link, portal users can create and manage developer apps linked to one or more API products.
/// </summary>
public record GoogleCloudApigeeV1ApiDoc
{
    /// <summary>
    /// Output only. The ID of the parent portal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("siteId")]
    public string? SiteId { get; init; }

    /// <summary>
    /// Optional. Boolean flag that manages user access to the catalog item. When true, the catalog item has public visibility and can be viewed anonymously; otherwise, only registered users may view it. Note: when the parent portal is enrolled in the <see href="https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature">audience management feature</see>, and this flag is set to false, visibility is set to an indeterminate state and must be explicitly specified in the management UI (see <see href="https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility">Manage the visibility of an API in your portal</see>). Additionally, when enrolled in the audience management feature, updates to this flag will be ignored as visibility permissions must be updated in the management UI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("anonAllowed")]
    public bool? AnonAllowed { get; init; }

    /// <summary>
    /// Optional. DEPRECATED: DO NOT USE
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specId")]
    public string? SpecId { get; init; }

    /// <summary>
    /// Optional. DEPRECATED: manage documentation through the <c>getDocumentation</c> and <c>updateDocumentation</c> methods
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("graphqlSchemaDisplayName")]
    public string? GraphqlSchemaDisplayName { get; init; }

    /// <summary>
    /// Optional. Denotes whether the catalog item is published to the portal or is in a draft state. When the parent portal is enrolled in the <see href="https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature">audience management feature</see>, the visibility can be set to public on creation by setting the anonAllowed flag to true or further managed in the management UI (see <see href="https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility">Manage the visibility of an API in your portal</see>) before it can be visible to any users. If not enrolled in the audience management feature, the visibility is managed by the <c>anonAllowed</c> flag.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("published")]
    public bool? Published { get; init; }

    /// <summary>
    /// Optional. Immutable. DEPRECATED: use the <c>apiProductName</c> field instead
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("edgeAPIProductName")]
    public string? EdgeApiProductName { get; init; }

    /// <summary>
    /// Optional. DEPRECATED: use the <c>published</c> field instead
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visibility")]
    public bool? Visibility { get; init; }

    /// <summary>
    /// Optional. The IDs of the API categories to which this catalog item belongs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categoryIds")]
    public IReadOnlyList<string>? CategoryIds { get; init; }

    /// <summary>
    /// Optional. Location of the image used for the catalog item in the catalog. This can be either an image with an external URL or a file path for <see href="/apigee/docs/api-platform/publish/portal/portal-files"">image files stored in the portal</see>, for example, <c>/files/book-tree.jpg</c>. When specifying the URL of an external image, the image won't be uploaded to your assets; additionally, loading the image in the integrated portal will be subject to its availability, which may be blocked or restricted by <see href="/apigee/docs/api-platform/publish/portal/csp">content security policies</see>. Max length of file path is 2,083 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageUrl")]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// Required. The user-facing name of the catalog item. <c>title</c> must be a non-empty string with a max length of 255 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Optional. DEPRECATED: manage documentation through the <c>getDocumentation</c> and <c>updateDocumentation</c> methods
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("graphqlEndpointUrl")]
    public string? GraphqlEndpointUrl { get; init; }

    /// <summary>
    /// Required. Immutable. The <c>name</c> field of the associated <see href="/apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts">API product</see>. A portal may have only one catalog item associated with a given API product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProductName")]
    public string? ApiProductName { get; init; }

    /// <summary>
    /// Optional. Description of the catalog item. Max length is 10,000 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Optional. DEPRECATED: manage documentation through the <c>getDocumentation</c> and <c>updateDocumentation</c> methods
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("graphqlSchema")]
    public string? GraphqlSchema { get; init; }

    /// <summary>
    /// Output only. Time the catalog item was last modified in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modified")]
    public string? Modified { get; init; }

    /// <summary>
    /// Optional. Whether a callback URL is required when this catalog item's API product is enabled in a developer app. When true, a portal user will be required to input a URL when managing the app (this is typically used for the app's OAuth flow).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requireCallbackUrl")]
    public bool? RequireCallbackUrl { get; init; }

    /// <summary>
    /// Output only. The ID of the catalog item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
