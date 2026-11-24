using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageFormsWebhooksResponse
{
    [JsonPropertyName("webhooks")]
    public required IReadOnlyList<Webhook> Webhooks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
