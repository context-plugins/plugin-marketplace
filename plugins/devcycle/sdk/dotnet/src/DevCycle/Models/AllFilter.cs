using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record AllFilter
{
    /// <summary>
    /// Filter type of this audience
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "all";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
