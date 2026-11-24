using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiUpdateDatasourceResponsibilitiesRequestDto
{
    [JsonPropertyName("responsibilities")]
    public required IReadOnlyList<DatasourceResponsibilityContentRequestDto> Responsibilities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
