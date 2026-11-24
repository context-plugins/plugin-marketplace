using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiUpdateDatasetRoleResponse
{
    [JsonPropertyName("datasetRole")]
    public required DatasetRoleContentDto DatasetRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
