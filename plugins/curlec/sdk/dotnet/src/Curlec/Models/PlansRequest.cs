using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record PlansRequest
{
    /// <summary>
    /// Billing frequency unit. For daily, minimum interval is 7.
    /// </summary>
    [JsonPropertyName("period")]
    public required Period1 Period { get; init; }

    /// <summary>
    /// Number of periods between charges (e.g. interval=3, period=monthly → charge every 3 months).
    /// </summary>
    [JsonPropertyName("interval")]
    public required int Interval { get; init; }

    [JsonPropertyName("item")]
    public required Item1 Item { get; init; }

    /// <summary>
    /// Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    [MaxProperties(15)]
    public IReadOnlyDictionary<string, string>? Notes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
