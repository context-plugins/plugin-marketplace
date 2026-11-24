using System.Text.Json.Serialization;
using Cosmic.Models.Enums;

namespace Cosmic.Models;

/// <summary>
/// One operation in a batch request.
/// </summary>
public record BatchOperation
{
    [JsonPropertyName("method")]
    public required Method Method { get; init; }

    /// <summary>
    /// Required for <c>edit</c> and <c>delete</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("object_id")]
    public string? ObjectId { get; init; }

    /// <summary>
    /// Required for <c>add</c> and <c>edit</c>. Accepts the same properties as the single-Object create and update endpoints.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("object")]
    public object? Object { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trigger_webhook")]
    public bool? TriggerWebhook { get; init; }
}
