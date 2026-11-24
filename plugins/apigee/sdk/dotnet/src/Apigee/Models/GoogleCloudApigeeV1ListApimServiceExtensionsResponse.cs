using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for list service extensions.
/// </summary>
public record GoogleCloudApigeeV1ListApimServiceExtensionsResponse
{
    /// <summary>
    /// Page token that you can include in an <c>ListApimServiceExtensions</c> request to retrieve the next page. If omitted, no subsequent pages exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// service extension in a given organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apimServiceExtensions")]
    public IReadOnlyList<GoogleCloudApigeeV1ApimServiceExtension>? ApimServiceExtensions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
