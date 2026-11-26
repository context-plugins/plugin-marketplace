using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record AchDisbursement2
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
