using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest
{
    /// <summary>
    /// Set to true to unsubscribe the subscription from this newsletter list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unsubscribe")]
    public bool? Unsubscribe { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
