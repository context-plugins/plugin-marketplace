using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record Stats
{
    [JsonPropertyName("total_contributions")]
    public required string TotalContributions { get; init; }

    [JsonPropertyName("recurring_contributions")]
    public required string RecurringContributions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
