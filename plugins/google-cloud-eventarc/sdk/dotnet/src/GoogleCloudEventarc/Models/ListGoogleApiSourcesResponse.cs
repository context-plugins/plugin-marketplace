using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// The response message for the <c>ListGoogleApiSources</c> method.
/// </summary>
public record ListGoogleApiSourcesResponse
{
    /// <summary>
    /// The requested GoogleApiSources, up to the number specified in <c>page_size</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("googleApiSources")]
    public IReadOnlyList<GoogleApiSource>? GoogleApiSources { get; init; }

    /// <summary>
    /// Unreachable resources, if any.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unreachable")]
    public IReadOnlyList<string>? Unreachable { get; init; }

    /// <summary>
    /// A page token that can be sent to <c>ListMessageBusEnrollments</c> to request the next page. If this is empty, then there are no more pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
