using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Required when the time range is set to "custom". On PATCH, omit to preserve the existing range; send null to remove it.
/// A PATCH that sets <c>timeRange</c> to a mode other than "custom" without sending <c>customTimeRange</c> removes it.
/// Sending null while <c>timeRange.mode</c> stays "custom" is rejected.
/// </summary>
public record CustomTimeRange1
{
    /// <summary>
    /// The start timestamp of the time range in RFC3339 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from")]
    public DateTimeOffset? From { get; init; }

    /// <summary>
    /// The end timestamp of the time range in RFC3339 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("to")]
    public DateTimeOffset? To { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
