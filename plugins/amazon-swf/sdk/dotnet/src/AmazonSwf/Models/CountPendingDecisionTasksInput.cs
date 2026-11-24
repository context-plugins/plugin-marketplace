using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record CountPendingDecisionTasksInput
{
    /// <summary>
    /// The name of the domain that contains the task list.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonPropertyName("taskList")]
    public required TaskList TaskList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
