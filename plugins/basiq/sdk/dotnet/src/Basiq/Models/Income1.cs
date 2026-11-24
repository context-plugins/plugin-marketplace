using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Income1
{
    /// <summary>
    /// Minimum income threshold as a numeric string.
    /// </summary>
    [JsonPropertyName("min")]
    public required string Min { get; init; }

    /// <summary>
    /// Maximum income threshold as a numeric string. Optional.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max")]
    public string? Max { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
