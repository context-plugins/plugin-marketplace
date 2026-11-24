using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record TaskStatusResponse
{
    /// <summary>
    /// Common task summary fields shared across async task responses.
    /// </summary>
    [JsonPropertyName("task")]
    public required AsyncTaskSummary Task { get; init; }

    /// <summary>
    /// Credit information for an async task.
    /// </summary>
    [JsonPropertyName("credits")]
    public required AsyncTaskCredits Credits { get; init; }

    /// <summary>
    /// Webhook delivery status. Present on <c>COMPLETED</c> and <c>FAILED</c> tasks created with a <c>webhook.url</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhook")]
    public Webhook1? Webhook { get; init; }

    /// <summary>
    /// Present only when the task is <c>COMPLETED</c> or <c>FAILED</c>. For a <c>COMPLETED</c> task it is the provider's result; for a <c>FAILED</c> task it is the error, <c>{ "error": { "code", "message", "details" } }</c>, with <c>details</c> only when there is extra context.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("response")]
    public object? Response { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
