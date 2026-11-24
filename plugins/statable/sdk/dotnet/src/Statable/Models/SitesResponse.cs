using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record SitesResponse
{
    [JsonPropertyName("sites")]
    public required IReadOnlyList<SiteSummary> Sites { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
