using System.Text.Json.Serialization;
using Archbee.Core.Models;
using Archbee.Models.Enums;

namespace Archbee.Models;

/// <summary>
/// Process status
/// </summary>
public record DocsSearchResponse
{
    /// <summary>
    /// Response Status
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// Response Data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Data2? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
