using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// Custom query for sources that doesn't support sql. For example, Airtable.
/// </summary>
public record Custom
{
    [JsonPropertyName("query")]
    public required object Query { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
