using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
