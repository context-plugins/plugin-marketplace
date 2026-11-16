using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record EnableSettlementQueue
{
    /// <summary>
    /// Set to <c>MANUAL</c> to enable the <c>Merchant</c> to use the Settlement Queue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_queue_mode")]
    public SettlementQueueMode1? SettlementQueueMode { get; init; } = SettlementQueueMode1.Unset;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
