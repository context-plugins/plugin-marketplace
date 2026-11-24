using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record CustomerGroupsResponse
{
    /// <summary>
    /// Ready customer groups owned by the authenticated tenant.
    /// </summary>
    [JsonPropertyName("customerGroups")]
    public required IReadOnlyList<CustomerGroup> CustomerGroups { get; init; }
}
