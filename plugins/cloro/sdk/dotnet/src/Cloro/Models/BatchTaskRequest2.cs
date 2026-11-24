using System.Text.Json.Serialization;
using Cloro.Core.Validation.Attributes;
using Cloro.Models.Enums;

namespace Cloro.Models;

public record BatchTaskRequest2
{
    /// <summary>
    /// The AI provider to use for this task.
    /// </summary>
    [JsonPropertyName("taskType")]
    public required TaskType2 TaskType { get; init; }

    /// <summary>
    /// The provider's request body, validated against the same schema as its sync endpoint (for example <c>ChatGPTMonitorRequest</c>). That makes <c>country</c> required here too, or <c>gl</c> on the Google endpoints. For <c>GOOGLE_PRODUCT</c>, send only <c>productResultToken</c>.
    /// </summary>
    [JsonPropertyName("payload")]
    public required object Payload { get; init; }

    /// <summary>
    /// Task priority level (1-10). Higher numbers are processed first. Defaults to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priority")]
    [Minimum(1)]
    [Maximum(10)]
    public int? Priority { get; init; } = 1;

    /// <summary>
    /// Unique string to prevent duplicate task creation. Must be unique across your account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotencyKey")]
    public string? IdempotencyKey { get; init; }

    /// <summary>
    /// Webhook configuration for task completion notification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhook")]
    public Webhook? Webhook { get; init; }
}
