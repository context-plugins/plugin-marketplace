using System.Collections.Generic;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager.Models;

public record SubscribedAppsRequest
{
    /// <summary>
    /// List of Page fields to subscribe to, such as feed, messages, messaging_postbacks.
    /// </summary>
    [JsonPropertyName("subscribed_fields")]
    public required IReadOnlyList<string> SubscribedFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
