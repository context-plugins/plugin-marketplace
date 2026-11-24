using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListGeneratedSpecApis.
/// </summary>
public record GoogleCloudApihubV1ListGeneratedSpecApisResponse
{
    /// <summary>
    /// The tracked APIs for the requested parent, ordered by <c>update_time desc</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generatedSpecApis")]
    public IReadOnlyList<GoogleCloudApihubV1GeneratedSpecApi>? GeneratedSpecApis { get; init; }

    /// <summary>
    /// A token to retrieve the next page of results; empty when there are no more results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
