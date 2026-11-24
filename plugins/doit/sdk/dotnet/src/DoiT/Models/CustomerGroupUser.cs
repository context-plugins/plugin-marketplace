using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record CustomerGroupUser
{
    /// <summary>
    /// User assigned to the customer group.
    /// </summary>
    [JsonPropertyName("userId")]
    [StringLength(200, MinimumLength = 1)]
    public required string UserId { get; init; }
}
