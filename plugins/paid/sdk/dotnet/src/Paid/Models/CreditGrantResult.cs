using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CreditGrantResult
{
    [JsonPropertyName("amount")]
    public required int Amount { get; init; }

    /// <summary>
    /// When these credits become spendable, as an RFC3339 datetime with timezone.
    /// </summary>
    [JsonPropertyName("startsAt")]
    public required DateTimeOffset StartsAt { get; init; }

    /// <summary>
    /// When these credits expire, as an RFC3339 datetime with timezone. Null when the credits do not expire.
    /// </summary>
    [JsonPropertyName("expiresAt")]
    public required DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// Credit grants are active immediately when created.
    /// </summary>
    [JsonPropertyName("status")]
    public string Status { get; } = "active";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
