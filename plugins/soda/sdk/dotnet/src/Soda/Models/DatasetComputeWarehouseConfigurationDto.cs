using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record DatasetComputeWarehouseConfigurationDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("availableWarehouses")]
    public IReadOnlyList<UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto>? AvailableWarehouses { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentWarehouse")]
    public UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto? CurrentWarehouse { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasetWarehouseOverride")]
    public UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto? DatasetWarehouseOverride { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultWarehouse")]
    public UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto? DefaultWarehouse { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
