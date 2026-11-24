using System;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record BasesWebhooksRefreshResponse
{
    /// <summary>
    /// The new expiration time for the webhook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expirationTime")]
    public DateTimeOffset? ExpirationTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
