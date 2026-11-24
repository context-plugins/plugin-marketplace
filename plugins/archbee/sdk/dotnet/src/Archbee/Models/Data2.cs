using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

/// <summary>
/// Response Data
/// </summary>
public record Data2
{
    /// <summary>
    /// Search session id, can be used as input for next search calls.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchSessionId")]
    public string? SearchSessionId { get; init; }

    /// <summary>
    /// Array of Doc responses
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("docs")]
    public Docs? Docs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
