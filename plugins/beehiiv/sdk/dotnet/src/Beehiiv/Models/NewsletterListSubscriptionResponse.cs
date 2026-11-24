using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record NewsletterListSubscriptionResponse
{
    [JsonPropertyName("data")]
    public required NewsletterListSubscriptionInfo Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
