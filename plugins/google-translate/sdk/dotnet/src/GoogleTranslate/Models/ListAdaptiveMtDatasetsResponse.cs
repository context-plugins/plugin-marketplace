using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// A list of AdaptiveMtDatasets.
/// </summary>
public record ListAdaptiveMtDatasetsResponse
{
    /// <summary>
    /// Output only. A list of Adaptive MT datasets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adaptiveMtDatasets")]
    public IReadOnlyList<AdaptiveMtDataset>? AdaptiveMtDatasets { get; init; }

    /// <summary>
    /// Optional. A token to retrieve a page of results. Pass this value in the [ListAdaptiveMtDatasetsRequest.page_token] field in the subsequent call to <c>ListAdaptiveMtDatasets</c> method to retrieve the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
