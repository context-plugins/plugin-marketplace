using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ValueModelContentValueTypesItemsMonetaryConversion
{
    [JsonPropertyName("expression")]
    public required string Expression { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public IReadOnlyList<ValueModelContentValueTypesItemsMonetaryConversionVariablesItems>? Variables { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conditions")]
    public IReadOnlyList<ValueModelContentValueTypesItemsMonetaryConversionConditionsItems>? Conditions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
