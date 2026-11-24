using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1PostHistoryImportResponse1
{
    [JsonPropertyName("imports")]
    public required IReadOnlyList<ImportBundleSocialPostImportApi> Imports { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
