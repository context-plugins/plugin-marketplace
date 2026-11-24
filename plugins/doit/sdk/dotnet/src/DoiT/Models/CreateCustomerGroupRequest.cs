using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

public record CreateCustomerGroupRequest
{
    [JsonPropertyName("name")]
    [StringLength(200, MinimumLength = 1)]
    public required string Name { get; init; }

    [JsonPropertyName("memberCustomerIds")]
    [MinLength(1)]
    [UniqueItems]
    public required IReadOnlyList<string> MemberCustomerIds { get; init; }
}
