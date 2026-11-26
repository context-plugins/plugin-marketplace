using System.Collections.Generic;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;

namespace Justtrack.Models;

public record ListAppsResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<AppOutput> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
