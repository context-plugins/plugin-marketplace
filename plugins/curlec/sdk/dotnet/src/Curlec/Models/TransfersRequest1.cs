using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record TransfersRequest1
{
    /// <summary>
    /// true to hold settlement; false to release.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("on_hold")]
    public bool? OnHold { get; init; }

    /// <summary>
    /// Unix timestamp for automatic hold release. null = hold indefinitely until manually released.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("on_hold_until")]
    public int? OnHoldUntil { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
