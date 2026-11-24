using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record PollForActivityTaskInput
{
    /// <summary>
    /// The name of the domain that contains the task lists being polled.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonPropertyName("taskList")]
    public required TaskList TaskList { get; init; }

    /// <summary>
    /// Identity of the worker making the request, recorded in the ActivityTaskStarted event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public string? Identity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
