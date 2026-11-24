using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1MathRequest
{
    /// <summary>
    /// Operation to perform
    /// </summary>
    [JsonPropertyName("operation")]
    public required string Operation { get; init; }

    /// <summary>
    /// First number
    /// </summary>
    [JsonPropertyName("a")]
    public required double A { get; init; }

    /// <summary>
    /// Second number
    /// </summary>
    [JsonPropertyName("b")]
    public required double B { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
