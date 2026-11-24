using System.Collections.Generic;
using System.Text.Json.Serialization;
using Boomi.Core.Models;
using Boomi.Models.Enums;

namespace Boomi.Models;

public record NestedExpression
{
    /// <summary>
    /// Filter values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("argument")]
    public IReadOnlyList<string>? Argument { get; init; }

    /// <summary>
    /// Comparison operator.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operator")]
    public Operator1? Operator { get; init; }

    /// <summary>
    /// Object property to filter on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("property")]
    public string? Property { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
