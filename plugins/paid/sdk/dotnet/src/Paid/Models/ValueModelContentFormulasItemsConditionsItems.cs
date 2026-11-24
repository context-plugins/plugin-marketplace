using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.AnyOf;
using Paid.Models.Enums;

namespace Paid.Models;

public record ValueModelContentFormulasItemsConditionsItems
{
    [JsonPropertyName("field")]
    public required string Field { get; init; }

    [JsonPropertyName("operator")]
    public required ValueModelContentFormulasItemsConditionsItemsOperator Operator { get; init; }

    [JsonPropertyName("value")]
    public required ValueModelContentFormulasItemsConditionsItemsValue Value { get; init; }

    [JsonPropertyName("result")]
    public required ValueModelContentFormulasItemsConditionsItemsResult Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
