using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record UserGroupContentDto
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("userGroupId")]
    public required string UserGroupId { get; init; }

    [JsonPropertyName("users")]
    public required IReadOnlyList<UserContentDto> Users { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
