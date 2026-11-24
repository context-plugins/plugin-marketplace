using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageIntegrationsHubspotPipelinesResponse
{
    [JsonPropertyName("pipelines")]
    public required IReadOnlyList<Pipeline> Pipelines { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
