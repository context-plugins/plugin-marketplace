using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiOnboardDatasetsRequestDto
{
    [JsonPropertyName("discoveredDatasetIds")]
    public required IReadOnlyList<string> DiscoveredDatasetIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
