using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Core.Validation.Attributes;

namespace BrowserUse.Models;

public record WorkspaceSizeInfo
{
    /// <summary>
    /// Current workspace storage usage in bytes.
    /// </summary>
    [JsonPropertyName("usedBytes")]
    [Minimum(0)]
    public required int UsedBytes { get; init; }

    /// <summary>
    /// Maximum workspace storage allowed in bytes.
    /// </summary>
    [JsonPropertyName("maxBytes")]
    [ExclusiveMinimum(0)]
    public required int MaxBytes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
