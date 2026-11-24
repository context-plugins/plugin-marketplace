using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The response for listing all AdaptiveMt files under a given dataset.
/// </summary>
public record ListAdaptiveMtFilesResponse
{
    /// <summary>
    /// Optional. A token to retrieve a page of results. Pass this value in the ListAdaptiveMtFilesRequest.page_token field in the subsequent call to <c>ListAdaptiveMtFiles</c> method to retrieve the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Output only. The Adaptive MT files.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adaptiveMtFiles")]
    public IReadOnlyList<AdaptiveMtFile>? AdaptiveMtFiles { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
