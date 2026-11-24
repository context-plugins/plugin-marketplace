using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record DatasetOwnerDtoSodaCloudApiV4DatasetsApi
{
    [JsonPropertyName("type")]
    public required ResponsibilityTypeDto Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user")]
    public UserContentDto? User { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userGroup")]
    public UserGroupContentBasicDto? UserGroup { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
