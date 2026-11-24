using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1PostCsvImportRowsResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<Item1BundleSocialPostCsvApi> Items { get; init; }

    [JsonPropertyName("total")]
    public required double Total { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
