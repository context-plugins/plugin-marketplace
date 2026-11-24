using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record CustomerGroupUserGroup
{
    /// <summary>
    /// User group assigned to the customer group.
    /// </summary>
    [JsonPropertyName("userGroupId")]
    [StringLength(200, MinimumLength = 1)]
    public required string UserGroupId { get; init; }
}
