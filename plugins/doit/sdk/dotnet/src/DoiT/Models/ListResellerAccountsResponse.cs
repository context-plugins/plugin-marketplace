using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record ListResellerAccountsResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<ResellerAccount> Items { get; init; }
}
