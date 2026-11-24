using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record PurchaseNumberResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number")]
    public PhoneNumber? Number { get; init; }

    /// <summary>
    /// Amount deducted from your wallet. 0 for included-in-plan numbers and idempotent replays.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("charged")]
    public double? Charged { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("breakdown")]
    public Breakdown? Breakdown { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wallet")]
    public Wallet? Wallet { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includedInSubscription")]
    public bool? IncludedInSubscription { get; init; }

    /// <summary>
    /// True when you already owned this number and nothing was billed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotencyReplay")]
    public bool? IdempotencyReplay { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
