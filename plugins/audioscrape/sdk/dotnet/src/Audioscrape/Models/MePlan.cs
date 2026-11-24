using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record MePlan
{
    [JsonPropertyName("limits")]
    public required PlanLimitsResponse Limits { get; init; }

    /// <summary>
    /// Plan slug: <c>free</c>, <c>starter</c>, <c>basic</c>, <c>pro</c>, <c>enterprise</c>.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
