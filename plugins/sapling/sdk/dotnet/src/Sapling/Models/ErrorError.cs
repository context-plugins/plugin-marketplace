using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record ErrorError
{
    /// <summary>
    /// Human-readable error message.
    /// </summary>
    [JsonPropertyName("msg")]
    public required string Msg { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
