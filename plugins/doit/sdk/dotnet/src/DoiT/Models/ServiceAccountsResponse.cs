using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Service accounts owned by the authenticated customer.
/// </summary>
public record ServiceAccountsResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<ServiceAccount> Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
