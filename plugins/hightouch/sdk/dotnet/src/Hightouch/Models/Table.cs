using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// Table-based query that fetches on a table instead of SQL
/// </summary>
public record Table
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
