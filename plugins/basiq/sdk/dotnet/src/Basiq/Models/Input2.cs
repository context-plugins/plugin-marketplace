using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Input2
{
    /// <summary>
    /// Minimum balance from request
    /// </summary>
    [JsonPropertyName("min")]
    public required string Min { get; init; }

    /// <summary>
    /// Maximum balance from request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max")]
    public string? Max { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
