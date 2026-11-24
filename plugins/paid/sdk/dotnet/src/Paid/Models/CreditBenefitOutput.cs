using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CreditBenefitOutput
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("creditsCurrencyId")]
    public required string? CreditsCurrencyId { get; init; }

    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonPropertyName("recipient")]
    public required string Recipient { get; init; }

    [JsonPropertyName("isInfiniteTotal")]
    public required bool IsInfiniteTotal { get; init; }

    [JsonPropertyName("allocationCadence")]
    public required string AllocationCadence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditGrantTiming")]
    public string? CreditGrantTiming { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overageUnitPrice")]
    public double? OverageUnitPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rolloverAmount")]
    public double? RolloverAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rolloverDuration")]
    public double? RolloverDuration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rolloverDurationUnit")]
    public string? RolloverDurationUnit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
