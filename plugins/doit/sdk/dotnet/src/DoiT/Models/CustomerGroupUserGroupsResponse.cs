using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record CustomerGroupUserGroupsResponse
{
    /// <summary>
    /// Customer group the assignments belong to.
    /// </summary>
    [JsonPropertyName("customerGroupId")]
    [StringLength(200, MinimumLength = 1)]
    public required string CustomerGroupId { get; init; }

    /// <summary>
    /// User groups assigned to the customer group, sorted by user-group ID.
    /// </summary>
    [JsonPropertyName("userGroups")]
    public required IReadOnlyList<CustomerGroupUserGroup> UserGroups { get; init; }
}
