using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record GrantCustomerCreditsResponse
{
    /// <summary>
    /// True when this request created a new grant.
    /// </summary>
    [JsonPropertyName("created")]
    public required bool Created { get; init; }

    [JsonPropertyName("customer")]
    public required CreditGrantCustomer Customer { get; init; }

    [JsonPropertyName("creditCurrency")]
    public required CreditGrantCurrency CreditCurrency { get; init; }

    [JsonPropertyName("grant")]
    public required CreditGrantResult Grant { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
