using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record SegmentSubscriptionInput1
{
    /// <summary>
    /// Discriminator value: emails
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "emails";

    [JsonPropertyName("emails")]
    public required IReadOnlyList<string> Emails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
