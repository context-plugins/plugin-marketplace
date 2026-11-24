using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record CustomerGroupUsersResponse
{
    /// <summary>
    /// Customer group the assignments belong to.
    /// </summary>
    [JsonPropertyName("customerGroupId")]
    [StringLength(200, MinimumLength = 1)]
    public required string CustomerGroupId { get; init; }

    /// <summary>
    /// Users assigned to the customer group, sorted by user ID.
    /// </summary>
    [JsonPropertyName("users")]
    public required IReadOnlyList<CustomerGroupUser> Users { get; init; }
}
