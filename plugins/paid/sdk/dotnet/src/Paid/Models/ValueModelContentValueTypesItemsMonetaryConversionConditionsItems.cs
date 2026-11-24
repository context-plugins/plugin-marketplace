using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.AnyOf;
using Paid.Models.Enums;

namespace Paid.Models;

public record ValueModelContentValueTypesItemsMonetaryConversionConditionsItems
{
    [JsonPropertyName("field")]
    public required string Field { get; init; }

    [JsonPropertyName("operator")]
    public required ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator Operator { get; init; }

    [JsonPropertyName("value")]
    public required ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsValue Value { get; init; }

    [JsonPropertyName("result")]
    public required ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResult Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
