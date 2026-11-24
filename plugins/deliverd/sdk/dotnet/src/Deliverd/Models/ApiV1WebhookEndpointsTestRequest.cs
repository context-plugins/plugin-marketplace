using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1WebhookEndpointsTestRequest
{
    /// <summary>
    /// Which event to send, with obviously fake ids and "test": true beside it. Default report.published.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event")]
    public Event6? Event { get; init; } = Event6.ReportPublished;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
