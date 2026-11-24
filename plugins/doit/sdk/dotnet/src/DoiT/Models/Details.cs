using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Optional metadata about the result.
/// </summary>
public record Details
{
    /// <summary>
    /// Display aliases for values that appear in <c>rows</c>, keyed by dimension id and then by the stored value (for example <c>{"fixed:cloud_provider": {"datadog_prod": "Datadog (prod)"}}</c>). Rows keep the stored values so they can be fed back into filters; apply the alias only when presenting a value. Present only when the customer has renamed a DataHub dataset whose dimension is part of the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valueAliases")]
    public IReadOnlyDictionary<string, string>? ValueAliases { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
