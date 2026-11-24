using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record WorkflowExecutionCount
{
    /// <summary>
    /// The number of workflow executions.
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    /// <summary>
    /// If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("truncated")]
    public bool? Truncated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
