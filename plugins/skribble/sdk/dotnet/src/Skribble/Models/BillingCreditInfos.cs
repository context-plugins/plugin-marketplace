using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record BillingCreditInfos
{
    /// <summary>
    /// ISO 8601 date-time in UTC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validFrom")]
    public DateTimeOffset? ValidFrom { get; init; }

    /// <summary>
    /// Array of consumptions, each with endpoint details and its credit cost
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumptions")]
    public IReadOnlyList<CreditInfo>? Consumptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
