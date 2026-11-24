using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CustomerStateCheckoutLink
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("status")]
    public required CustomerStateCheckoutLinkStatus Status { get; init; }

    [JsonPropertyName("productIds")]
    public required IReadOnlyList<string> ProductIds { get; init; }

    [JsonPropertyName("singleUse")]
    public required bool SingleUse { get; init; }

    [JsonPropertyName("allowedCurrencies")]
    public required IReadOnlyList<string> AllowedCurrencies { get; init; }

    [JsonPropertyName("expiresAt")]
    public required DateTimeOffset? ExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
