using System.Collections.Generic;
using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

/// <summary>
/// Response schema containing the delivery results for each live activity.
/// </summary>
public record V1StartLiveActivitiesResponse
{
    /// <summary>
    /// List of delivery results for each live activity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delivery_results")]
    public IReadOnlyList<Clixexternalv1DeliveryResult>? DeliveryResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
