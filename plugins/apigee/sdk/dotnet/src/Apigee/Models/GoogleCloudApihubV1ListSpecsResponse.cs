using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The ListSpecs method's response.
/// </summary>
public record GoogleCloudApihubV1ListSpecsResponse
{
    /// <summary>
    /// The specs corresponding to an API Version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specs")]
    public IReadOnlyList<GoogleCloudApihubV1Spec>? Specs { get; init; }

    /// <summary>
    /// A token, which can be sent as <c>page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
