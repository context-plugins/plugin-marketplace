using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record SitesGoalsResponse
{
    [JsonPropertyName("goals")]
    public required IReadOnlyList<Goal> Goals { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
