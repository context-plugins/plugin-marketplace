using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record ConvertPositionData
{
    /// <summary>
    /// Status message for convert position request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
