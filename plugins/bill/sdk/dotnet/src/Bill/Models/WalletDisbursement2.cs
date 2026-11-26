using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record WalletDisbursement2
{
    /// <summary>
    /// Instant Transfer (wallet) payment arrives by date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arrivesByDate")]
    public DateTimeOffset? ArrivesByDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
