using System.Collections.Generic;
using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

public record DiscoveryResults
{
    /// <summary>
    /// List of expansion results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<Result>? Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
