using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Specification for a task.
/// <para>
/// Auto output schemas can be specified by setting <c>output_schema={"type":"auto"}</c>. Not
/// specifying a TaskSpec is the same as setting an auto output schema.
/// </para>
/// <para>
/// For convenience bare strings are also accepted as input or output schemas.
/// </para>
/// </summary>
public record TaskSpec
{
    /// <summary>
    /// JSON schema or text fully describing the desired output from the task. Descriptions of output fields will determine the form and content of the response. A bare string is equivalent to a text schema with the same description.
    /// </summary>
    [JsonPropertyName("output_schema")]
    public required OutputSchema1 OutputSchema { get; init; }

    /// <summary>
    /// Optional JSON schema or text description of expected input to the task. A bare string is equivalent to a text schema with the same description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input_schema")]
    public InputSchema? InputSchema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
