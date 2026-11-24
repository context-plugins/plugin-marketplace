using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

public record Location
{
    /// <summary>
    /// Required person location. Multiple values are comma delimited. Omit entirely to receive all locations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
