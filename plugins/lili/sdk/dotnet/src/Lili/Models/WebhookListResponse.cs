using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lili.Core.Models;

namespace Lili.Models;

public record WebhookListResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookList")]
    public IReadOnlyList<WebhookResponse>? WebhookList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
