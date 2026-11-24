using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation.Attributes;

namespace StayingApi.Models;

public record Credits
{
    /// <summary>
    /// Raw credit balance (latest ledger balance_after; may include not-yet-materialized expired credits).
    /// </summary>
    [JsonPropertyName("balance")]
    public required int Balance { get; init; }

    /// <summary>
    /// Spendable credits now = raw balance minus expired-unconsumed credits and active reservations. This is the number the admission gate uses.
    /// </summary>
    [JsonPropertyName("available")]
    public required int Available { get; init; }

    /// <summary>
    /// Credits currently reserved by accepted work that has not settled or released yet.
    /// </summary>
    [JsonPropertyName("held")]
    [Minimum(0)]
    public required int Held { get; init; }

    /// <summary>
    /// Credits expiring within the next 7 days.
    /// </summary>
    [JsonPropertyName("expiringSoon")]
    public required int ExpiringSoon { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
