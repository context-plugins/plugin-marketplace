using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record AnalyticsColumn
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// ClickHouse column type
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
