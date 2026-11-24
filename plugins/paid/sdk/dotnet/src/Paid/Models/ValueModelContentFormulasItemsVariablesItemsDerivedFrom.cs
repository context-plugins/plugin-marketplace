using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record ValueModelContentFormulasItemsVariablesItemsDerivedFrom
{
    [JsonPropertyName("sourceField")]
    public required string SourceField { get; init; }

    [JsonPropertyName("targetUnit")]
    public required ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit TargetUnit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
