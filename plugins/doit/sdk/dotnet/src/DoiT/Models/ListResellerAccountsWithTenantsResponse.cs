using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record ListResellerAccountsWithTenantsResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<ResellerAccountWithTenants> Items { get; init; }
}
