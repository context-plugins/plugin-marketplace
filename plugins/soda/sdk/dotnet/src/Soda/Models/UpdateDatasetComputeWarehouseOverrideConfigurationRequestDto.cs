using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record UpdateDatasetComputeWarehouseOverrideConfigurationRequestDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("computeWarehouseConfiguration")]
    public UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto? ComputeWarehouseConfiguration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
