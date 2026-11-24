using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.AnyOf;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record AudienceOperator
{
    /// <summary>
    /// Filters to apply using the "operator" operation
    /// </summary>
    [JsonPropertyName("filters")]
    public required IReadOnlyList<Filter> Filters { get; init; }

    /// <summary>
    /// Operator type if this object represents an operator, and not a filter
    /// </summary>
    [JsonPropertyName("operator")]
    public required Operator Operator { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
