using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.AnyOf;

namespace DevCycle.Models;

/// <summary>
/// Success response for the bulk evaluation request
/// </summary>
public record OfrepBulkEvaluationSuccess
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flags")]
    public IReadOnlyList<Flag>? Flags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
