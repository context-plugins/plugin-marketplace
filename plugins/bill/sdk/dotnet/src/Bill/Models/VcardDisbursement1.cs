using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record VcardDisbursement1
{
    /// <summary>
    /// Virtual card payment arrives by date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arrivesByDate")]
    public DateTimeOffset? ArrivesByDate { get; init; }

    /// <summary>
    /// Date until when the card is valid
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validUntil")]
    public DateTimeOffset? ValidUntil { get; init; }

    /// <summary>
    /// Masked number for virtual card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last4CardNumber")]
    public string? Last4CardNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
