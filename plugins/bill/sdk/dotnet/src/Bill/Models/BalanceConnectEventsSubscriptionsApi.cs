using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Vendor account balance information.
/// </summary>
public record BalanceConnectEventsSubscriptionsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDate")]
    public DateTimeOffset? LastUpdatedDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
