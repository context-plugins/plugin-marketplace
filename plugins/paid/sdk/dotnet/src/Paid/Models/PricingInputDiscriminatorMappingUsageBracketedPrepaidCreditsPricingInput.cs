using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput
{
    [JsonPropertyName("kind")]
    public string Kind { get; } = "signalQuantity";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
