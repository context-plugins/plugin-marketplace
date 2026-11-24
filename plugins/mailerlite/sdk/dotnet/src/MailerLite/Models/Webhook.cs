using System.Text.Json.Serialization;
using MailerLite.Core.Models;

namespace MailerLite.Models;

public record Webhook
{
    /// <summary>
    /// Event
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event")]
    public object? Event { get; init; }

    /// <summary>
    /// URL for a webhook
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public object? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
