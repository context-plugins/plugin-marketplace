using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiUpdateDatasetResponsibilitiesRequestDto
{
    [JsonPropertyName("responsibilities")]
    public required IReadOnlyList<DatasetResponsibilityContentRequestDto> Responsibilities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
