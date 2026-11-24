using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record DatasetResponsibilityContentRequestDto
{
    [JsonPropertyName("roleId")]
    public required string RoleId { get; init; }

    [JsonPropertyName("type")]
    public required ResponsibilityTypeDto Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userGroupId")]
    public string? UserGroupId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
