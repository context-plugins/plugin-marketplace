using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record UserGroupContentBasicDto
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("userGroupId")]
    public required string UserGroupId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
