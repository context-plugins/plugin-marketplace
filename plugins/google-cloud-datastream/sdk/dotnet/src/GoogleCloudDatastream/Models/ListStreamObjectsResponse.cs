using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Response containing the objects for a stream.
/// </summary>
public record ListStreamObjectsResponse
{
    /// <summary>
    /// List of stream objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streamObjects")]
    public IReadOnlyList<StreamObject>? StreamObjects { get; init; }

    /// <summary>
    /// A token, which can be sent as <c>page_token</c> to retrieve the next page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
