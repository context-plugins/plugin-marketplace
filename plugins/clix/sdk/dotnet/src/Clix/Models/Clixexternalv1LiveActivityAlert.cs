using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

/// <summary>
/// Alert notification displayed when starting a Live Activity.
/// </summary>
public record Clixexternalv1LiveActivityAlert
{
    /// <summary>
    /// Title of the alert notification.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Body content of the alert notification.
    /// </summary>
    [JsonPropertyName("body")]
    public required string Body { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
