using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record NotificationsMessagesTestRequest
{
    /// <summary>
    /// The event type Id to be triggered. refer to /events/types/ for full list.
    /// </summary>
    [JsonPropertyName("eventTypeId")]
    public required string EventTypeId { get; init; }

    /// <summary>
    /// Text field to be supplied and replayed back.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Text")]
    public string? Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
