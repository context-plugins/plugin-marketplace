using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReportsDataResponse
{
    [JsonPropertyName("datasets")]
    public required IReadOnlyList<Dataset> Datasets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
