using System.Collections.Generic;
using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

public record BulkResults
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<EnrichmentResult>? Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
