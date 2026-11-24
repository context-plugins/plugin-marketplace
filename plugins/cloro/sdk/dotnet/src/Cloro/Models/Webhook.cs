using System.Text.Json.Serialization;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

/// <summary>
/// Webhook configuration for task completion notification.
/// </summary>
public record Webhook
{
    /// <summary>
    /// URL to receive the webhook POST request when the task completes.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }
}
