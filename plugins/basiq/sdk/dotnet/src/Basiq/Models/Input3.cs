using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Echo of the input parameters
/// </summary>
public record Input3
{
    /// <summary>
    /// Minimum income value from request
    /// </summary>
    [JsonPropertyName("min")]
    public required string Min { get; init; }

    /// <summary>
    /// Maximum income value from request
    /// </summary>
    [JsonPropertyName("max")]
    public required string Max { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
