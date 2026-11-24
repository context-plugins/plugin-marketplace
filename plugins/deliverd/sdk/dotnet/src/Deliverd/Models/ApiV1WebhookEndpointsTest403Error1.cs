using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1WebhookEndpointsTest403Error1
{
    [JsonPropertyName("error")]
    public required ErrorDeliverdDevWebhookEndpointsApi Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
