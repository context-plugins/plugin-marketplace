using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// ACH disbursement dto when the disbursement type is ach.
/// </summary>
public record AchDisbursement
{
    /// <summary>
    /// ACH payment sent date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentDate")]
    public DateTimeOffset? SentDate { get; init; }

    /// <summary>
    /// ACH payment arrives by date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arrivesByDate")]
    public DateTimeOffset? ArrivesByDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
