using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// If set, this object contains the last status change made by a user for this insight
/// </summary>
public record LastInsightStatusChange
{
    /// <summary>
    /// the reference to the user who made the change (if it was made by a user) If the change was made by an automated system, this reference is empty.
    /// </summary>
    [JsonPropertyName("userId")]
    public required string UserId { get; init; }

    [JsonPropertyName("lastChangedAt")]
    public required DateTimeOffset LastChangedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
