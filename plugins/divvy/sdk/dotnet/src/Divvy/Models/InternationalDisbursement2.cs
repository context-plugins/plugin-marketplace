using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

public record InternationalDisbursement2
{
    /// <summary>
    /// International ePayment sent date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentDate")]
    public DateTimeOffset? SentDate { get; init; }

    /// <summary>
    /// International ePayment arrives by date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arrivesByDate")]
    public DateTimeOffset? ArrivesByDate { get; init; }

    /// <summary>
    /// Disbursement amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursementSubType")]
    public DisbursementSubType? DisbursementSubType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
