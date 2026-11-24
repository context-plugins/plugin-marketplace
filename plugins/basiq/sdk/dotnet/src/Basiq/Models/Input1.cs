using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Input1
{
    /// <summary>
    /// Minimum balance value
    /// </summary>
    [JsonPropertyName("min")]
    public required string Min { get; init; }

    /// <summary>
    /// Maximum balance value
    /// </summary>
    [JsonPropertyName("max")]
    public required string Max { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
