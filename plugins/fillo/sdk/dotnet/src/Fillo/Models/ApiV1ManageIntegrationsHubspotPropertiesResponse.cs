using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageIntegrationsHubspotPropertiesResponse
{
    [JsonPropertyName("properties")]
    public required IReadOnlyList<Property> Properties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
