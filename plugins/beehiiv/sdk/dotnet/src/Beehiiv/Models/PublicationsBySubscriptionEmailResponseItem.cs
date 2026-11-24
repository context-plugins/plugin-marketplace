using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record PublicationsBySubscriptionEmailResponseItem
{
    /// <summary>
    /// The prefixed ID of the publication
    /// </summary>
    [JsonPropertyName("publication_id")]
    public required string PublicationId { get; init; }

    /// <summary>
    /// The name of the publication
    /// </summary>
    [JsonPropertyName("publication_name")]
    public required string PublicationName { get; init; }

    /// <summary>
    /// The prefixed ID of the subscription matching the email address for this publication
    /// </summary>
    [JsonPropertyName("subscription_id")]
    public required string SubscriptionId { get; init; }

    /// <summary>
    /// The status of the subscription matching the email address for this publication
    /// </summary>
    [JsonPropertyName("status")]
    public required SubscriptionExpandedStatus2 Status { get; init; }

    /// <summary>
    /// The full Publication object. Only present when <c>expand</c> includes <c>publication</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publication")]
    public Publication2? Publication { get; init; }

    /// <summary>
    /// The Subscription object matching the email address for this publication.  Only present when <c>expand</c> includes <c>subscription</c> or <c>subscription_custom_fields</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription")]
    public Subscription1? Subscription { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
