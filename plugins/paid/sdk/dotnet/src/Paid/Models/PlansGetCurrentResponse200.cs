using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record PlansGetCurrentResponse200
{
    /// <summary>
    /// The plan details, or null if the customer has no active plan
    /// </summary>
    [JsonPropertyName("plan")]
    public required PlansCurrentGetResponsesContentApplicationJsonSchemaPlan? Plan { get; init; }

    /// <summary>
    /// The subscription details, or null if the customer has no active plan
    /// </summary>
    [JsonPropertyName("subscription")]
    public required PlansCurrentGetResponsesContentApplicationJsonSchemaSubscription? Subscription { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
