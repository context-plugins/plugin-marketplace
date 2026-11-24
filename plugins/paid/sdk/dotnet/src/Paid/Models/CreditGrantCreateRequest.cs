using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CreditGrantCreateRequest
{
    /// <summary>
    /// Stable machine-readable key for the active credit currency to grant.
    /// </summary>
    [JsonPropertyName("creditCurrencyKey")]
    public required string CreditCurrencyKey { get; init; }

    /// <summary>
    /// Number of credits to grant. This is not a monetary amount.
    /// </summary>
    [JsonPropertyName("amount")]
    public required int Amount { get; init; }

    /// <summary>
    /// When these credits become spendable, as an RFC3339 datetime with timezone. Must be at or before the current server time. Defaults to the current server time when omitted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startsAt")]
    public DateTimeOffset? StartsAt { get; init; }

    /// <summary>
    /// When these credits expire, as an RFC3339 datetime with timezone. Omit or set null for credits that do not expire.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public DateTimeOffset? ExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
