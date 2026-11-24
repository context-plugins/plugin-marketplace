using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// Standard raw SQL query
/// </summary>
public record Raw
{
    [JsonPropertyName("sql")]
    public required string Sql { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
