using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The ListAttributes method's response.
/// </summary>
public record GoogleCloudApihubV1ListAttributesResponse
{
    /// <summary>
    /// A token, which can be sent as <c>page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// The list of all attributes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApihubV1Attribute>? Attributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
