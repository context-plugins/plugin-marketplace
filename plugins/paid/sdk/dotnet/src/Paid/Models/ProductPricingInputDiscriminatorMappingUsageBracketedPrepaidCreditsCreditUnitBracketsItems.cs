using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems
{
    [JsonPropertyName("upTo")]
    public required int? UpTo { get; init; }

    [JsonPropertyName("creditUnits")]
    public required int CreditUnits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
