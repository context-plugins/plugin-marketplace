using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record ListEndCustomersResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<EndCustomerNode> Items { get; init; }
}
