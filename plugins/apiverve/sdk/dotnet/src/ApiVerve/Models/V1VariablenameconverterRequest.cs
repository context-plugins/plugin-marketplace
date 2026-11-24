using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1VariablenameconverterRequest
{
    /// <summary>
    /// Array of variable names to convert (max 100). Every entry must be a string.
    /// </summary>
    [JsonPropertyName("variables")]
    public required string Variables { get; init; }

    /// <summary>
    /// Target naming convention
    /// </summary>
    [JsonPropertyName("to")]
    public required string To { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
