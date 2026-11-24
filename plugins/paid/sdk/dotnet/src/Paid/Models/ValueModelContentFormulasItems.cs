using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ValueModelContentFormulasItems
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("valueTypeSlug")]
    public required string ValueTypeSlug { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("variables")]
    public required IReadOnlyList<ValueModelContentFormulasItemsVariablesItems> Variables { get; init; }

    [JsonPropertyName("expression")]
    public required string Expression { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conditions")]
    public IReadOnlyList<ValueModelContentFormulasItemsConditionsItems>? Conditions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultResult")]
    public ValueModelContentFormulasItemsDefaultResult? DefaultResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
