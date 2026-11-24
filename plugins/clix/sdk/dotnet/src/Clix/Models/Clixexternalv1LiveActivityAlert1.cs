using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

/// <summary>
/// Push notification alert displayed when the Live Activity starts. If not provided, defaults to title: 'Live Activity', body: 'Started'.
/// </summary>
public record Clixexternalv1LiveActivityAlert1
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
