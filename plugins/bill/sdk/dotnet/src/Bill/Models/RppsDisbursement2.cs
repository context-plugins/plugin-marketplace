using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record RppsDisbursement2
{
    /// <summary>
    /// ACH payment to verified national vendor sent date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentDate")]
    public DateTimeOffset? SentDate { get; init; }

    /// <summary>
    /// ACH payment to verified national vendor arrives by date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arrivesByDate")]
    public DateTimeOffset? ArrivesByDate { get; init; }

    /// <summary>
    /// Payment trace number. This value is used to uniquely identify a payment in a batch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traceNumber")]
    public int? TraceNumber { get; init; }

    /// <summary>
    /// Payment batch number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("batchNumber")]
    public int? BatchNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
